import axios from "axios";

export default calenderURL => {
  return axios
    .get(calenderURL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};
