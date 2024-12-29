const express = require('express');
const Log = require('../models/Log'); // Assuming the Log model is in models/log.model.js

const router = express.Router();

// Controller to create a log
const createLog = async (req, res) => {
  try {
    const { username, req_url } = req.body;
    if (!username || !req_url) {
      return res.status(400).json({ message: 'username and req_url are required.' });
    }

    const log = new Log({ username, req_url });
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

// Controller to get logs by username
const getLogsByUserId = async (req, res) => {
  try {
    const { username } = req.params;
    const logs = await Log.find({ username });
    if (!logs.length) {
      return res.status(404).json({ message: 'No logs found for this user.' });
    }
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error fetching logs by username:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Routes
router.post('/', createLog);
router.get('/', getAllLogs);
router.get('/:user_id', getLogsByUserId);

module.exports = router;
