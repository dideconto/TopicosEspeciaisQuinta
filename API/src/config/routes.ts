import { Router } from "express";
import { CicloController } from "../controllers/CicloController";

const router = Router();
const cicloController = new CicloController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor
router.get("/ciclo/listar", cicloController.listar);
router.get("/ciclo/listar/:id", cicloController.listarPorId);
router.post("/ciclo/cadastrar", cicloController.cadastrar);

export { router };
