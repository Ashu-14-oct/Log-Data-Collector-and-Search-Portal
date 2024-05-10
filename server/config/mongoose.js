const mongoose = require("mongoose");

// console.log(process.env.MONGO_DB);

const mongodb = mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("connected with mongodb");
  })
  .catch((err) => {
    console.log("error in mongoose config", err);
  });

  module.exports = mongodb;