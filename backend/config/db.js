const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    // Log the full error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Full error:', error);
    }
    process.exit(1);
  }
};

module.exports = connectDB; 