import React from "react";
import CustomButton from "../../components/from/Button/CustomButton";
import Header from "../../layouts/Header";
import styles from "./Home.module.scss";
import Image1 from "../../assets/images/illustration-working.svg";
// import Axios from "../../utils/API/Axios";
// import URL from "../../utils/API/URL";
// import { useSelector, useDispatch } from "react-redux";
// import { addUrl } from "../../redux/ShortenUrl";

const Home = () => {
  // const { urls } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // console.log("dsfdsf", urls);
  // const runToast = () =>
  //   Axios({
  //     url: `${URL.convertUrlToShort}`,
  //     method: "get",
  //   });

  return (
    <div>
      {/* This is the header section */}
      <Header />
      {/* This is the header section */}

      {/* This is the title section */}
      <div className={styles.titleContainer}>
        <div className={styles.titlesContainer}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performed
          </p>
          <CustomButton
            name="Get Started"
            shape="fullyRoundedShape"
            size="lg"
          />
        </div>
        <div className={styles.imageContainer}>
          <img src={Image1} alt="" srcset="" />
        </div>
      </div>
      {/* This is the title section */}

      {/* This is the adding short links section */}
      <div className={styles}></div>
      {/* This is the adding short links section */}
      {/* <input type="button" value="ddd" onClick={() => runToast()} />
      <input
        type="button"
        value="callReduser"
        onClick={() =>
          dispatch(addUrl({ longUrl: "sadsad", sortUrl: "dsfss" }))
        }
      />
      {urls?.map((data) => (
        <div>
          <span>{data?.longUrl}</span>
          <span>{data?.sortUrl}</span>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
