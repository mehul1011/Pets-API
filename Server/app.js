const express = require("express");
const cors = require("cors");
const app = express();
const petRouter = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api", petRouter); // base url

petRouter.route("/pet").post(postPets).get(getPets);

petRouter.route("/pet/:id").get(getPetById).patch(updatePet).delete(deletePet);

// const userRouter = require("./Routers/userRouter");

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

// --------------------------------------------

async function postPets(req, res) {
  let dataObject = req.body;
  console.log("Node", dataObject);
  let user = await userModel.create(dataObject);
  // console.log(user);
  res.json({
    message: "User is signed up",
    data: user,
  });
}

async function getPets(req, res) {
  let allUsers = await userModel.find();
  //   let user = await userModel.find();
  if (allUsers) {
    res.json({ message: "list of users", data: allUsers });
  } else {
    return res.json({ message: "Users not found" });
  }
}

async function getPetById(req, res) {
  let paramId = req.params.id;
  const pet = await userModel.findById(paramId).exec();
  res.json({ message: "req is received", data: pet });
}

async function updatePet(req, res) {
  let petToUpdate = req.params.id;
  let dataToBeUpdated = req.body;
  let pet = await userModel.findOneAndUpdate(
    {
      _id: petToUpdate,
    },
    dataToBeUpdated
  );
  res.json({
    message: "data is updated",
    user: pet,
  });
}

async function deletePet(req, res) {
  let dataToBeDeleted = req.params.id;
  let pet = await userModel.findByIdAndDelete(dataToBeDeleted);
  res.json({ message: "pet is deleted", data: pet });
}

app.listen(3000, "localhost", () => {
  console.log("App is listening on port 3000");
});
