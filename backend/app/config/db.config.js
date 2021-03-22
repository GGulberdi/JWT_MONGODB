const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://Gul:Tazedatabase@cluster0.aqxwp.mongodb.net/jwtMongoDb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
   
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

module.exports = mongoose;