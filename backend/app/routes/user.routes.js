const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
let router = require("express").Router();
const authController = require("../controllers/auth.controller");
  
  router.get("/all", controller.allAccess);

  router.get("/user", [authJwt.verifyToken], controller.userBoard);

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    authController.signup
  );

  router.post("/signin", authController.signin);


  module.exports = router;