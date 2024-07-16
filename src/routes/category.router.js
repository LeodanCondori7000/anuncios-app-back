const { Router } = require("express");
const router = Router();

const getCategoriesHandler = require("../handlers/categoriesHandler/getCategoriesHandler")

router.route("/categories").get(getCategoriesHandler)

module.exports = router;