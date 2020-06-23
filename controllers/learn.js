const Course = require("../models/course");
const User = require("../models/user");

exports.learnNew = async (req, res) => {
  const courseId = req.params.course;
  const user = await User.findById(req._id).select("check course");
  const courseStt = user.course.findIndex((e) => e == courseId);
  const course = await Course.findById(courseId);
  // sort
  let limit, end, begin;
  limit = 5;
  begin = 0;
  end = limit - begin;
  // data
  const data = {
    list: course.list.slice(begin, end),
    multi: {
      multiVocab: course.multi.multiVocab.slice(begin, end),
      multiMean: course.multi.multiMean.slice(begin, end),
    },
  };

  res.json(data);
};
