import axios from "axios";

const axiosWithHeader = () => {

  return axios.create({
    headers: {
      "Content-Type": "text/html",
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff',
    }
  });
};

export default axiosWithHeader;