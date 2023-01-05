const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();
const db = mongoose
    .connect(process.env.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Mongo Connected!");
    })
    .catch(() => {
        console.log("Cannot be connected");
    });

module.exports = db;