const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userSchema = require("./Schema/mongoSchema");
const petRouter = require("./Routers/petsRouter");

app.use(cors());
app.use(express.json());

app.use("/api", petRouter); // base url

// const userRouter = require("./Routers/userRouter");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App is listening on port 3000");
});
