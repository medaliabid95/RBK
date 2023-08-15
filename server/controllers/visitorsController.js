const VisitorCount = require('../database/models/VisitorCountModel');

async function incrementVisitorCount() {
  try {
    const currentDate = new Date();
    const [visitorCount, created] = await VisitorCount.findOrCreate({
      where: { date: currentDate },
      defaults: { count: 1 },
    });

    if (!created) {
      await visitorCount.increment('count', { by: 1 });
    }

    return visitorCount.count;
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    throw error;
  }
}

async function getVisitorCount() {
  try {
    const currentDate = new Date();
    const visitorCount = await VisitorCount.findOne({
      where: { date: currentDate },
    });

    return visitorCount ? visitorCount.count : 0;
  } catch (error) {
    console.error('Error getting visitor count:', error);
    throw error;
  }
}



async function getTotalVisitorCountForDay() {
    try {
      const currentDate = new Date();
      const totalVisitorCount = await VisitorCount.findAll();
      return totalVisitorCount.length;
    } catch (error) {
      console.error('Error getting total visitor count for the day:', error);
      throw error;
    }
  }

module.exports = {
  incrementVisitorCount,
  getVisitorCount,
  getTotalVisitorCountForDay,
};
