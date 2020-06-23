const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  isAuth,
  requireSignin,
} = require("../controllers/auth");
const { getUser } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/isauth", isAuth, getUser);
module.exports = router;
