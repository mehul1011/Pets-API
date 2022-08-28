const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// ---------------------------------------------
const db_link = process.env.DB_LINK;
mongoose
  .connect(db_link)
  .then(function (db) {
    console.log("db is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

const userSchema = mongoose.Schema({
  // a boilerplate just like how sql has table structure
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.model("userModel", userSchema); // name of model, which schema to use

module.exports = userModel;
