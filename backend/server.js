
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
// require('./app/routes/staff.routes')(app);
// // var staffRouter = require('./app/routes/staff.routes');

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:3000"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
// const Role = db.role;

// app.use('/api/staff', staffRouter);

// db.mongoose.connect('mongodb+srv://elifzer:Zerrin2180@cluster0.x9mlw.mongodb.net/newBackend?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });
 
// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });

//       new Role({
//         name: "staff"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'staff' to roles collection");
//       });
//     }
//   });
// }



// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routerUser = require("./app/routes/user.routes");
const routerStaff = require("./app/routes/staff.routes");

let corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
require("./app/config/db.config");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin,  X-Requested-With, Content-Type, Accept");
  next();
});
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});

app.use("/api/staff", routerStaff);
app.use("/api/auth", routerUser);



// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});