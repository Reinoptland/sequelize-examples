const express = require("express");
const User = require("./models").user;

const app = express();

// install express.json() middleware so we can read request bodies
app.use(express.json());

const PORT = 4000;

let requestCount = 0;

app.get("/users", async (req, res) => {
  requestCount = requestCount + 1;
  console.log("Requests so far:", requestCount);
  //   console.log("HI! IS THIS WORKING?");
  try {
    const users = await User.findAll();
    // console.log("ALL USERS?", users);

    res.json(users);
  } catch (error) {
    res.status(400).send({ message: "Error in getting users, sorry" });
  }
});

app.post("/users", async (req, res, next) => {
  requestCount = requestCount + 1;
  console.log("Requests so far:", requestCount);
  // Do we have the correct data?

  // Request - Validation
  if (!req.body.email) {
    return res.status(400).send({ message: "Please provide a valid email" });
  }
  //   console.log("TESTING!");
  //   console.log(req.body);

  try {
    const newUser = await User.create(req.body);
    return res.json(newUser);
    // console.log("NEW?", newUser);
  } catch (error) {
    // next(error);
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
