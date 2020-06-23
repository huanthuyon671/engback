const express = require("express");
const router = express.Router();

const { isAuth } = require("../controllers/auth");
const { learnNew } = require("../controllers/learn");

router.post("/new/:course", isAuth, learnNew);
// router.post("/detail/:course", details);
// router.post("/", testNewCourse);
// router.post("/lists", listCourses);
module.exports = router;
