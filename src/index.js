const express = require("express");
const mongoose = require("mongoose");
const route = require("../src/routes/routes");
const app = express();

app.use(express.json());

const url =
  "mongodb+srv://Jyoti273-db:djukOqR9QbI5Itvc@cluster0.nzuylps.mongodb.net/crop-Management";
const port = process.env.PORT || 3000;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, () => {
  console.log("Express app is running on port " + port);
});
