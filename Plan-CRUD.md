## CRUD API

Update users

Destroy users

## Steps

- [x] Setup a database (sequelize init, config)
- [x] Make a user model & migration
- [x] Make user seeds
- [x] Setup express
  - make a file
  - install dependencies
  - import express
  - create an app object
  - define a port
  - listen on the port
  - test
  - make a script with nodemon
- [x] Read users
  - app.get route
  - route handler (req, res) => {}
  - Query the database (using a sequelize model)
  - test with httpie
  - send a response
  - catch errors
- [ ] Create users
  - app.post route
  - route handler (req, res) => {}
  - test (request)
  - Get the data for the new user, from req.body
  - test (console.log(req.body))
  - Insert data into the database using -> Model.create()
  - test (QueryPie / Postico)
  - send a response
  - catch the errors / validation
