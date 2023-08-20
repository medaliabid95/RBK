const Cohort = require('../database/models/CohortModel');

const createCohort = async (req, res) => {
  try {
    const cohort = await Cohort.create(req.body);
    res.status(201).json(cohort);
  } catch (error) {
    res.status(400).json({ message: 'Error creating cohort', error: error.message });
  }
};

const getAllCohorts = async (req, res) => {
  try {
    const cohorts = await Cohort.findAll();
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cohorts', error: error.message });
  }
};

const getCohortById = async (req, res) => {
  const cohortId = req.params.id;

  try {
    const cohort = await Cohort.findByPk(cohortId);
    if (cohort) {
      res.status(200).json(cohort);
    } else {
      res.status(404).json({ message: 'Cohort not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cohort', error: error.message });
  }
};

const updateCohort = async (req, res) => {
  try {
      const cohort = await Cohort.findByPk(req.params.id);
      if (!cohort) {
          res.status(404).json({ message: "cohort not found" });
      } else {
          await cohort.update(req.body);
          res.status(200).json(cohort);
      }
  } catch (error) {
      res.status(500).json(error);
  }
};

const deleteCohort = async (req, res) => {
  const cohortId = req.params.id;

  try {
    const deletedCount = await Cohort.destroy({
      where: { id: cohortId },
    });

    if (deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Cohort not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cohort', error: error.message });
  }
};

module.exports = {
 createCohort,
  getAllCohorts,
  getCohortById,
  updateCohort,
  deleteCohort,
};
