require('dotenv').config();
const mongoose = require('mongoose');

console.log('Attempting to connect to:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection error:', err.message);
    console.error('Full error:', err);
    process.exit(1);
  }); 