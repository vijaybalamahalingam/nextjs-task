const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  res.json({ message: "Hello There!" });
});

router.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log({ username, password });
  res.send("POST request successful");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ message: "Loged in", token: "fakeToken" });
});

router.post("/protectedRoute", (req, res) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    res.json({ message: "Protected route accessed!" });
  }
});

module.exports = router;
