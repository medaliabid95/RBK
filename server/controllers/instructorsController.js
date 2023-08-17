const Instructor = require('../database/models/InstructorModel');

const createInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.create(req.body);
    res.status(201).json(instructor);
  } catch (error) {
    res.status(400).json({ message: 'Error creating instructor', error: error.message });
  }
};

const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.findAll();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving instructors', error: error.message });
  }
};

const getInstructorById = async (req, res) => {
  const instructorId = req.params.id;

  try {
    const instructor = await Instructor.findByPk(instructorId);
    if (instructor) {
      res.status(200).json(instructor);
    } else {
      res.status(404).json({ message: 'Instructor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving instructor', error: error.message });
  }
};

const updateInstructor = async (req, res) => {
  const instructorId = req.params.id;

  try {
    const [updatedCount, updatedInstructors] = await Instructor.update(req.body, {
      where: { id: instructorId },
      returning: true,
    });
    if (updatedCount > 0) {
      res.status(200).json(updatedInstructors[0]);
    } else {
      res.status(404).json({ message: 'Instructor not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating instructor', error: error.message });
  }
};

const deleteInstructor = async (req, res) => {
  const instructorId = req.params.id;

  try {
    const deletedCount = await Instructor.destroy({
      where: { id: instructorId },
    });

    if (deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Instructor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting instructor', error: error.message });
  }
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor,
};
