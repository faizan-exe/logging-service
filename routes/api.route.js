const Log = require('../models/log.model'); // Assuming the Log model is in models/log.model.js

// Controller to create a log
const createLog = async (req, res) => {
  try {
    const { user_id, req_url } = req.body;
    if (!user_id || !req_url) {
      return res.status(400).json({ message: 'user_id and req_url are required.' });
    }

    const log = new Log({ user_id, req_url });
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    console.error('Error creating log:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller to get all logs
const getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller to get logs by user_id
const getLogsByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const logs = await Log.find({ user_id });
    if (!logs.length) {
      return res.status(404).json({ message: 'No logs found for this user.' });
    }
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error fetching logs by user_id:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  createLog,
  getAllLogs,
  getLogsByUserId,
};
