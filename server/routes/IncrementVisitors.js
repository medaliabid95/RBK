const express = require('express');
const visitorController = require('../controllers/visitorsController');

const router = express.Router();

router.post('/increment', async (req, res) => {
  try {
    const updatedCount = await visitorController.incrementVisitorCount();
    res.json({ count: updatedCount , ipClient : req.ip  });
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/count', async (req, res) => {
  try {
    const count = await visitorController.getVisitorCount();
    res.json({ count });
  } catch (error) {
    console.error('Error getting visitor count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/total-count', async (req, res) => {
    try {
      const totalVisitorCount = await visitorController.getTotalVisitorCountForDay();
      res.json({ total: totalVisitorCount });
    } catch (error) {
      console.error('Error getting total visitor count for the day:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
