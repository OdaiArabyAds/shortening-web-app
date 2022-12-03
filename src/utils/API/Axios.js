import axios from "axios";
import runNotification from "../functions";

const Axios = (data) => {
  //This is configurations for general calling api
  const configurations = {
    url: data?.url,
    method: data?.method,
  };

  //This is a nested condition to check whether the API contains data or not and to distinguish between get and post
  if (data?.method === "get" && data?.params) {
    configurations.params = data.params;
  } else if (data?.method === "post" && data?.data) {
    configurations.data = data.data;
  }

  //calling api (axios)
  return axios(configurations)
    .then((res) => {
      //Here to return the short link

      return { link: res?.data?.result?.full_short_link };
    })
    .catch((err) => {
      const data = err?.response?.data;

      if (data?.error_code) {
        //if the code more than 2 we will return false and run notification
        data?.error_code > 2 && runNotification(data?.error, "error");

        //Here we will return the code to run validation for input
        return data?.error_code;
      }
    });
};

export default Axios;
