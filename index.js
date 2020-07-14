const express = require("express");

const app = express();

const PORT = 4000;

app.get("/users", (req, res) => {
  console.log("HI! IS THIS WORKING?");
  res.send("TESTING");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
