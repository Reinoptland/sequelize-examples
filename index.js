const express = require("express");
const User = require("./models").user;
const Profile = require("./models").profile;
const Story = require("./models").story;
const morgan = require("morgan");
const { response } = require("express");

const app = express();

// MIDDLEWARE
// install express.json() middleware so we can read request bodies
// used to be called body-parser
app.use(express.json());
// counts the requests
app.use(counterMiddleWare);
app.use(morgan("dev"));

const PORT = 4000;

let requestCount = 0;

function counterMiddleWare(req, res, next) {
  // console.log("MIDDLEWARE EXECUTED");
  requestCount = requestCount + 1;
  console.log("Requests so far:", requestCount);
  next();
}

app.get("/users", async (req, res, next) => {
  //   console.log("HI! IS THIS WORKING?");
  try {
    const users = await User.findAll({
      include: [Profile],
    });
    // console.log("ALL USERS?", users);

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Error in getting users, sorry" });
  }
});

app.post("/users", async (req, res, next) => {
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

app.get("/users/:userId/stories", async (req, res, next) => {
  // console.log("hi", req.params.userId);
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId, {
      include: [Story],
    }); // how we can only the stories from User with id 2?

    if (!user) {
      return res.status(404).send({ message: "Not found" });
    }

    if (user.stories.length === 0) {
      return res.status(404).send({
        message: "This is user does not have anything interesting to say",
      });
    }

    return res.json(user.stories);
  } catch (error) {
    next(error);
  }

  // alternate way to query stories:

  // const stories = await Story.findAll({
  //   where: {
  //     userId: userId,
  //   },
  // });
});

// Make an endpoint to fetch all the stories for a specific user

// Plan:
// 1. Make a route -> add a parameter (so you know which user's stories we want): userId
// TEST
// 2. Database Query -> get the stories / user from the database
// TEST
// 3. Send a response -> with the stories
// TEST
// 4. Catch the errors / validation
