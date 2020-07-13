"use strict";

// import the file service module of node (we are going to read some files)
const fs = require("fs");
// import the path module (we are going to do things with file locations)
const path = require("path");
// import sequelize
const Sequelize = require("sequelize");
// base = where are these files located
const basename = path.basename(__filename);
// what is our environment? development or test or production -> which database do we need
const env = process.env.NODE_ENV || "development";
// get the configuration file & get the config object for it
const config = require(__dirname + "/../config/config.json")[env];
// create db object? -> empty to start, we are going to fill this object
const db = {};

let sequelize;
// connect to our database using the config object
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.url, config);
}

// what files are in the models folder?
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      // we only want javascript files
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // instantiate the model from each file (only user.js right now)
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // db.user = usermodel
    db[model.name] = model;
  });

// if there are any relations between the tables, set them up
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// store our database connection in the db object
db.sequelize = sequelize;
// store the entire sequelize library in the db object
db.Sequelize = Sequelize;

// export the db object
module.exports = db;
