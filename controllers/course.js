const Course = require("../models/course");
const User = require("../models/user");

exports.newCourse = async (req, res) => {
  const user = await User.findById(req.body.id).populate("course");
  user.course.push(req.params.course);
  user.check.push({});
  await user.save();

  res.json(user);
};

exports.testNewCourse = async (req, res) => {
  const course = new Course({
    name: req.body.name,
  });
  await course.save();
  res.json({ course });
};

exports.listCourses = async (req, res) => {
  const courses = await Course.find().select("name _id");
  res.json(courses);
};

exports.details = async (req, res) => {
  const course = await Course.findById(req.params.course);
  res.json(course);
};
