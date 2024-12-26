const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 Connected to MongoDB'))
.catch(err => console.error('🔴 MongoDB connection error:', err));

app.use('/api/log', require('./routes/api.route'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
