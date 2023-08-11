const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController.js');


router.post('/addEvent',eventsController.addEvent );
router.get('/getAllEvents', eventsController.getAllEvents);
router.get('/getOneEvent/:id', eventsController.getOneEvent);
router.put('/updateOne/:id', eventsController.updateEvent);
router.delete('/delete/:id', eventsController.deleteEvent);

module.exports = router;
