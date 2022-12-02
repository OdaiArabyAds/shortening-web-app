import React from "react";
import Axios from "../../utils/API/Axios";
import URL from "../../utils/API/URL";
import { useSelector, useDispatch } from "react-redux";
import { addUrl } from "../../redux/ShortenUrl";

const Home = () => {
  const { urls } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("dsfdsf", urls);
  const runToast = () =>
    Axios({
      url: `${URL.convertUrlToShort}`,
      method: "get",
    });

  return (
    <div>
      <input type="button" value="ddd" onClick={() => runToast()} />
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
      ))}
    </div>
  );
};

export default Home;
