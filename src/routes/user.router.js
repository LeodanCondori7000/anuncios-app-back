const { Router } = require("express");
const router = Router();
const userSignUpHandler = require("../handlers/userSignUpHandler.js");
const userSignInHandler = require("../handlers/userSignInHandler.js");
const updateUserHandler = require("../handlers/updateUserHandler.js");
const userLogoutHandler = require("../handlers/userLogoutHandler.js");

const validation = require("../middlewares/validationMiddleware.js");
const userSignUpSchema = require("../validations/userSignUpValidation.js");
const userSignInSchema = require("../validations/userSignInValidation.js");
const verifyToken = require("../middlewares/authMiddleware.js");


router.route("/user/logout").get(userLogoutHandler);
router
  .route("/user/signup")
  .post(validation(userSignUpSchema), userSignUpHandler);
router
  .route("/user/signin")
  .post(validation(userSignInSchema), userSignInHandler);
router.route("/user/:id").put(verifyToken, updateUserHandler);

module.exports = router;
