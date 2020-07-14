const express = require("express");
const User = require("./models").user;

const app = express();

// install express.json() middleware so we can read request bodies
app.use(express.json());

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

app.post("/users", async (req, res) => {
  console.log("TESTING!");
  console.log(req.body);
  const newUser = await User.create(req.body);

  console.log("NEW?", newUser);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
