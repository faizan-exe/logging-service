// Import mongoose
const mongoose = require('mongoose');

// Define the schema for logs
const LogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Replace 'User' with the actual name of your user model if needed
  },
  req_url: {
    type: String,
    required: true,
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
