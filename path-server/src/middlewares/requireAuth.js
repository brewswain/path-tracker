const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "Please log in" });
  }

  // ensuring that we simply get our JWT from our header.
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "PLACEHOLDER_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "Please log in" });
    }

    // auth.route.js has our userId
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
