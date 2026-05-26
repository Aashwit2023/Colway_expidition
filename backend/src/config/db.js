import mongoose from 'mongoose';

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/colway_expedition';

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.warn('WARNING: MONGO_URI is not set. Falling back to local MongoDB at', mongoUri);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('MongoDB Error', error);
  }
};

export default connectDB;