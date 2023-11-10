const express = require("express");

const app = express();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/test", (req, res) => {
  res.json({message:"Hi supratim1"});
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;