import axios from "axios";

const base_url = "https://check-health-status-api.herokuapp.com";
export const getHealthStatus = async (endpoint, callback) => {
  try {
    const { data } = await axios.get(`${base_url}/health/api/${endpoint}`);
    callback(data);
  } catch (e) {
    console.log(e);
  }
};
