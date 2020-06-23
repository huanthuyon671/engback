const Course = require("../models/course");
const axios = require("axios");
const _ = require("lodash");

exports.createCourse = (req, res) => {
  url = "http://localhost:4000/lerit/" + req.params.id;
  axios.get(url).then(async (b) => {
    // res.json(b.data);
    let course = await new Course(b.data);
    await course.save();
    res.json(course);
  });
};

exports.getData = (req, res) => {
  Course.find().exec((err, data) => {});
};

exports.multiChoise = async (req, res) => {
  const course = await Course.findOne({
    name: "Nghề nghiệp (Anh-Việt)",
  });
  course.list.map((e, index) => {
    let multi = [];
    multi.push(e.vocab);
    if (index < 10) {
      for (let i = 1; i < 11; i = i + 2) {
        multi.push(course.list[index + i].vocab);
      }
    } else if (index > course.list.length - 9) {
      for (let i = -9; i < 0; i = i + 2) {
        multi.push(course.list[index + i].vocab);
      }
    } else {
      for (let i = -8; i < 5; i = i + 3) {
        multi.push(course.list[index + i].vocab);
      }
    }
    course.multi.multiVocab.push(_.shuffle(multi));
  });
  course.list.map((e, index) => {
    let multi = [];
    multi.push(e.meaning);
    if (index < 10) {
      for (let i = 1; i < 11; i = i + 2) {
        multi.push(course.list[index + i].meaning);
      }
    } else if (index > course.list.length - 9) {
      for (let i = -9; i < 0; i = i + 2) {
        multi.push(course.list[index + i].meaning);
      }
    } else {
      for (let i = -8; i < 5; i = i + 3) {
        multi.push(course.list[index + i].meaning);
      }
    }
    course.multi.multiMean.push(_.shuffle(multi));
  });

  await course.save();
  res.json({ message: "done" });
};
