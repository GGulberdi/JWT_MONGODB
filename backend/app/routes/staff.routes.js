const staff = require("../controllers/staff.controller");
let router = require("express").Router();

  router.post("/", staff.create); // Create a new Collection
  router.get("/", staff.findAll);  // Retrieve all Collections
  router.get("/:id", staff.findOne);  // Retrieve a single Collection with id
  router.put("/:id", staff.update);  // Update a Collection with id
  router.delete("/:id", staff.delete);  // Delete a Collection with id
  router.delete("/", staff.deleteAll);   // Delete all Collections

module.exports = router;