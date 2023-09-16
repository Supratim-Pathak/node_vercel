const express = require("express");

const app = express();

var corsOptions = {
  origin: "*"
};

const cors = require("cors");
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/test", (req, res) => {
  res.json({message:"Hi supratim"});
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;