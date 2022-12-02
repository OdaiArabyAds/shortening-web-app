import axios from "axios";
import { toast } from "react-toastify";

const callToast = (message) => {
  //this is function to run notification UI
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

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
  axios(configurations)
    .then((res) => {
      //Here to return the short link
      return { link: res?.result?.full_short_link };
    })
    .catch((err) => {
      const data = err?.response?.data;

      if (data?.error_code) {
        //if the code more than 2 we will return false and run notification
        data?.error_code > 2 && callToast(data?.error);

        //Here we will return the code to run validation for input
        return { error: data?.error_code > 2 };
      }
    });
};

export default Axios;
