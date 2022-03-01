const { Router } = require("express");
const purebaRouter = Router();
const pruebaCtrl = require("../controllers/prueba.controllers.js");

purebaRouter.get("/", pruebaCtrl.obtener);
purebaRouter.post("/", pruebaCtrl.crear);
purebaRouter.put("/", pruebaCtrl.actualizar);
purebaRouter.delete("/", pruebaCtrl.Eliminar);
module.exports = purebaRouter;
