const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://raghavsarda7023597686:R3xqYOtQfGMZsvF8@cluster0.ttfwhka.mongodb.net/CodeAid";

const connectToMongo = () => {
  mongoose.connect(process.env.mongoURI || mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
