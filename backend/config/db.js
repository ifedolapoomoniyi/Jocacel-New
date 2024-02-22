const mongoose = require('mongoose');
const db =
"mongodb+srv://ifedolapo:jocaceldatabase@backend.ifgqosf.mongodb.net/?retryWrites=true&w=majority&appName=backend"

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  }
  catch (err) {
    console.error("Yikes, Not working");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;