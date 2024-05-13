const { Router } = require("express");
const router = Router();
const userHandler = require("../handlers/userHandler.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.route("/user").get(userHandler)

module.exports = router;
