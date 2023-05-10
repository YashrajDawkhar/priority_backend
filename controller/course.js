
require('../database/connection_db')
const Course = require('../models/course')


exports.save = async function (req, res) {

  const courseData = req.body;
  const category = req.params.category;

  console.log(category);

  try {
    const doc = await Course.findOne({ category });

    if (doc) {
      // If a document with the category already exists, update it
      const updatedDoc = await Course.findOneAndUpdate(
        { category },
        { $push: { courses: courseData } },
        { new: true }
      );

      res.status(200).json({messsage:"updated"});
    } else {
      // If a document with the category does not exist, create a new one
      const newDoc = await Course.create({ category, courses: [courseData] });

      res.status(200).json({messsage:"New Course Created updated"});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


exports.getDetails = async function (req, res) {

  try {

    const category = req.params.category;

    let demoCourse = await Course.findOne({ category }, { courses: { title: 1, desc: 1, img: 1 } });

    if (!demoCourse) {
      return res.status(404).json({ error: `No courses found for category ${category}` });
    }

    res.status(200).json(demoCourse);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

exports.getDetailsById = async function (req, res) {

  try {

    const category = req.params.category;
    const id = req.params.id;


    console.log(category, id);

    let demoCourse = await Course.findOne({ category });


    console.log(demoCourse.courses[id]);

    if (!demoCourse) {
      return res.status(404).json({ error: 'No courses found for category "demo"' });
    }

    res.status(200).json(demoCourse.courses[id]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}



