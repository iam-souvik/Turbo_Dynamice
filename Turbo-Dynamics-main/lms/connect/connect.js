const mongoose = require("mongoose");

const connectDB = async () => {
  return await mongoose.connect(
    `mongodb+srv://imran:hack1212@cluster0.nrbbhqm.mongodb.net/hackathon`
  );
};

module.exports = connectDB;
