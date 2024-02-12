const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI =
    "mongodb+srv://ajayperumalla111:AjayUser123@cluster0.lthydwt.mongodb.net/";
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => console.log(e));
};

module.exports = dbConnect;
