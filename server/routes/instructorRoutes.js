const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorsController');


router.post('/add', instructorController.createInstructor);
router.get('/getAll', instructorController.getAllInstructors);
router.get('/getOne/:id', instructorController.getInstructorById);
router.put('/updateOne/:id', instructorController.updateInstructor);
router.delete('/delete/:id', instructorController.deleteInstructor);

module.exports = router;
