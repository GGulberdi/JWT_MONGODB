const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.staff = require("./staff.model");
db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator", "staff"];

module.exports = db;