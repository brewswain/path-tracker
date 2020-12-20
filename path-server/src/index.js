require("./models/user.model");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth.route");
const requireAuth = require("./middlewares/requireAuth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Make sure that the bodyparser is put above our routes
// that need JSON responses.
app.use(bodyParser.json());
app.use(authRoute);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
