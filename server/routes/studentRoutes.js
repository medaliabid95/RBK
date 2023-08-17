const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.post('/add', studentController.createStudent);
router.get('/getAll', studentController.getAllStudents);
router.get('/getOne/:compus', studentController.getStudentByCompus);
router.put('/updateOne/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
