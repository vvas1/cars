import mongoose from 'mongoose';

const connectDB = async () => {
  const db = process.env.MONGO_URL;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
