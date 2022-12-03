import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import styles from "./Home.module.scss";
import SiteInfo from "../../layouts/SiteInfo/SiteInfo";
import ShortLinkAdd from "../../components/ui/ShortLinkAdd/ShortLinkAdd";
import AddedLinked from "../../components/ui/AddedLinked/AddedLinked";
import Axios from "../../utils/API/Axios";
import URL from "../../utils/API/URL";
import { useSelector, useDispatch } from "react-redux";
import { addUrl } from "../../redux/ShortenUrl";
import runNotification from "../../utils/functions";
import Card from "../../components/ui/Cards/Card";
import cardData from "./cardData";
import Boost from "../../components/ui/Boost/Boost";
import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  const { urls } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [urlText, setUrlText] = useState("");
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState("");

  //This function to read from clipBoard
  const clipBoard = async () => {
    const text = await navigator.clipboard.readText().then((data) => data);
    setIsCopied(text);
  };

  //This to see if we have some link still in top clipBoard even after close the app
  useEffect(() => {
    clipBoard();
  }, []);

  //this function to add a link
  const convertUrl = async () => {
    let url = URL.convertUrlToShort;
    if (urlText) url += `?url=${urlText}`;
    const result = await Axios({
      url: url,
      method: "get",
    });

    //we check if the user not add alink or add an invalid url
    if (result === 1) setError({ show: true, message: "Please add a link" });
    else if (result === 2)
      setError({ show: true, message: "Invalid link, for ex:google.com" });
    else if (result?.link) {
      //we call this function to check if the link added before
      checkingUrlIfExist(result);
    }
  };

  // this function to check the link is added or not , n case not will added to storage and redux
  const checkingUrlIfExist = (result) => {
    const exist =
      urls?.filter((data) => data?.longLink === urlText)?.length > 0;
    if (exist) runNotification("This Link already added", "error");
    else {
      dispatch(
        addUrl({
          longLink: urlText,
          shortLink: result?.link,
        })
      );
      setUrlText("");
      runNotification("The Link has been added", "success");
    }
  };

  const copyToClipBoard = (value) => {
    navigator.clipboard.writeText(value);
    clipBoard();
  };

  return (
    <div>
      <div className={styles.upperContainer}>
        {/* This is the header section */}
        <Header />
        {/* This is the header section */}
        {/* This is the title section */}
        <SiteInfo />
        {/* This is the title section */}
      </div>
      <div className={styles.lowerContainer}>
        {/* This is the adding short links section */}
        <ShortLinkAdd
          onChange={setUrlText}
          urlText={urlText}
          onClick={convertUrl}
          resetError={setError}
          error={error}
        />
        {/* This is the adding short links section */}
        {/* This is the added Links and stored ones */}
        <div className={styles.linksContainer}>
          {urls?.map((data) => (
            <AddedLinked
              isCopied={isCopied}
              key={data?.longLink}
              {...data}
              copyToClipBoard={copyToClipBoard}
            />
          ))}
        </div>

        {/* This is the added Links and stored ones */}

        {/* This is Advanced Statistics section */}
        <div className={styles.StatisticContainer}>
          <div className={styles.titleContainer}>
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>
          <div className={styles.cardContainer}>
            {cardData?.map((data) => (
              <Card key={data.title} {...data} />
            ))}
          </div>
        </div>
        {/* This is Advanced Statistics section */}
      </div>
      <div>
        <Boost />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
