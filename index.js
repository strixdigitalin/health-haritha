const express = require("express");
const app = express();
// --------------------
app.use(express.json({ limit: "50mb" }));
const PORT = process.env.PORT;
// const PORT = 6000;
var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
// const app = require("../server")
app.use(function (req, res, next) {
  console.log(req._parsedUrl.path, "----<<<<<<<<<<<Current ");
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// --------API LIST

app.use("/health", require("./Routes/HealthRoute"));

app.listen(PORT, () => {
  console.log("Server is running on  socket", PORT);
});
