const { Router } = require("express");
// Importar todos los routers;
const userRouter = require("./user.router.js");
const adRouter = require("./ad.router.js");
const categoryRouter = require("./category.router.js");

const router = Router();

// Configurar los routers
router.use("/api/v1", userRouter);
router.use("/api/v1", adRouter);
router.use("/api/v1", categoryRouter);

module.exports = router;
