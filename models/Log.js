// Import mongoose
const mongoose = require('mongoose');

// Define the schema for logs
const LogSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "Provide UserId"],},
  req_url: {
    type: String,
    required: [true, "Provide Request URL"],
  },
  date: {
    type: Date,
    default: Date.now, // Automatically sets to current date and time
  },
});

// Create the model from the schema
const Log = mongoose.model('Log', LogSchema);

// Export the model
module.exports = Log;
