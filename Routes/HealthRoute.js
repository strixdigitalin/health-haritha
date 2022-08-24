const express = require("express");
const router = express.Router();
const { health_json_data } = require("../JsonData.json");

router.get("/api/1", async (req, res) => {
  console.log(health_json_data);
  const { message, status_code } = health_json_data.api_one_response;
  res.status(status_code).send({ message, status_code });
  // res.status(health_json_data.api_one_response)
});
router.get("/api/2", async (req, res) => {
  console.log(health_json_data);
  const { message, status_code } = health_json_data.api_two_response;
  res.status(status_code).send({ message, status_code });
  // res.status(health_json_data.api_one_response)
});
router.get("/api/3", async (req, res) => {
  console.log(health_json_data);
  const { message, status_code } = health_json_data.api_three_response;
  res.status(status_code).send({ message, status_code });
  // res.status(health_json_data.api_one_response)
});

module.exports = router;
