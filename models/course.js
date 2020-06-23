const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: String,
  list: [],
  multi: { multiVocab: Array, multiMean: Array },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
