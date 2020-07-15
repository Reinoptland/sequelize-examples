const express = require("express");
const User = require("./models").user;
const Profile = require("./models").profile;
const Story = require("./models").story;
const Like = require("./models").like;
const morgan = require("morgan");

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

// Make an endpoint to fetch all the stories for a specific user

// Plan:
// 1. Make a route -> add a parameter (so you know which user's stories we want): userId
// TEST
// 2. Database Query -> get the stories / user from the database
// TEST
// 3. Send a response -> with the stories
// TEST
// 4. Catch the errors / validation

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
});

// 1. Make an endpoint to update a story

// PUT / PATCH -> PUT: replace the entire with my new info, PATCH: update only specific fields
// 1. Make a PATCH route (app.patch)
// TEST
// 2. See if we have the data in the request body
// TEST
// 3. DB query (.update method from the Model)
// TEST
// 4. Send a response
// TEST
// 5. Error handling/ validation

app.patch("/stories/:storyId", async (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const story = await Story.findByPk(req.params.storyId);

    if (!story) {
      return res.status(404).send({ message: "Not found" });
    }

    console.log(story);
    story.update(req.body);

    res.json(story);
  } catch (error) {
    next(error);
  }
});

// 2. Adding a like to a story by a user (many to many)

// 1. Route (POST)
// 2. Check if we have the data (what data do we need? -> userId, storyId)
// 3. Do the database query
// 4. Send a response
// 5. Handle errors

app.post("/stories/:storyId/likes", async (req, res, next) => {
  console.log(req.params.storyId, req.body);
  try {
    const like = await Like.create({
      storyId: req.params.storyId,
      userId: req.body.userId,
    });
    res.status(201).json(like);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
