const Event = require("../database/models/eventsModel.js")

const getAllEvents = async (req, res) => {
    try {
        const event = await Event.findAll()
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id)
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body)
        res.status(201).json(event)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateEvent = async (req, res) => {
    const eventId = req.params.id;
    console.log(eventId);
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { id: eventId },
            returning: true,
        });
        res.status(202).json(updatedEvent);
    } catch (error) {
        res.status(400).json({ message: 'Error updating event', error: error.message });
    }
};

const deleteEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
        const deletedCount = await Event.destroy({
            where: { id: eventId },
        });

        if (deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error: error.message });
    }
};

module.exports = {
    getAllEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    getOneEvent
};