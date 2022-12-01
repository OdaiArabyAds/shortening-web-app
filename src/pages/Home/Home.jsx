import React from "react";
import Axios from "../../shared/API/Axios";
import URL from "../../shared/API/URL";

const Home = () => {
  const runToast = () =>
    Axios({
      url: `${URL.convertUrlToShort}`,
      method: "get",
    });

  return (
    <div>
      <input type="button" value="ddd" onClick={() => runToast()} />
    </div>
  );
};

export default Home;
