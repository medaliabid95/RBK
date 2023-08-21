
const Student = require('../database/models/studentModel');


console.log(Student);
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: 'Error creating student', error: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving students', error: error.message });
  }
};

const getStudentByCompus = async (req, res) => {
  const studentCompus = req.params.compus;

  try {
    const student = await Student.findAll({ where: { compus: studentCompus } });
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving student', error: error.message });
  }
};

const updateStudent = async (req, res) => {
  const studentId = req.params.id;

  try {
    await Student.update(req.body, {
      where: { id: studentId },
      returning: true,
    });
    res.status(200).json("updated");
  } catch (error) {
    res.status(400).json({ message: 'Error updating student', error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const studentId = req.params.id;

  try {
    const deletedCount = await Student.destroy({
      where: { id: studentId },
    });

    if (deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
};

const getStudentsByCohort = async (req,res) => {
  const studentCompus = req.body.compus;
  const studentCohort=req.params.cohort
  try {
    const student = await Student.findAll({ where: { compus: studentCompus , CohortId :studentCohort ,Status : "Accepté" } });
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving student', error: error.message });
  }
}

module.exports = {
  getStudentsByCohort,
  createStudent,
  getAllStudents,
  getStudentByCompus,
  updateStudent,
  deleteStudent,
};
