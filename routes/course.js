const express = require("express");
const router = express.Router();

const { isAuth } = require("../controllers/auth");
const {
  newCourse,
  testNewCourse,
  listCourses,
  details,
} = require("../controllers/course");

router.post("/id/:course", newCourse);
router.post("/detail/:course", details);
router.post("/", testNewCourse);
router.post("/lists", listCourses);
module.exports = router;
