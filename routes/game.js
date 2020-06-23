const express = require("express");
const { createCourse, getData, multiChoise } = require("../controllers/games");
const router = express.Router();

router.post("/new/:id", createCourse);
router.get("/set", getData);
router.get("/multi", multiChoise);
module.exports = router;
