import axios from "axios";

export default (url, data) => {
  return axios
    .post(url, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
