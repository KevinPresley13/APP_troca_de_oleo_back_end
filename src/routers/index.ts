import { Router } from "express";
import * as trocaController from "../controllers/trocaController";
const router = Router();

router.get('/trocas', trocaController.getAll);

export default router;