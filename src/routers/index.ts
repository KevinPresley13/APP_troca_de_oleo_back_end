import { Router } from "express";
import * as trocaController from "../controllers/trocaController";
const router = Router();

router.get('/trocas', trocaController.getAll);
router.post('/troca', trocaController.add);

export default router;