const { Router } = require('express');
// Importar todos los routers;
const userRouter = require('./user.router.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/api/v1", userRouter);


module.exports = router;
