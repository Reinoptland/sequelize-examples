const express = require("express");
const User = require("./models").user;

const app = express();

const PORT = 4000;

app.get("/users", async (req, res) => {
  //   console.log("HI! IS THIS WORKING?");
  try {
    const users = await User.findAll();
    // console.log("ALL USERS?", users);

    res.json(users);
  } catch (error) {
    res.status(400).send({ message: "Error in getting users, sorry" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
