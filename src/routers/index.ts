import { Router } from "express";
import * as trocaController from "../controllers/trocaController";
const router = Router();

router.get('/trocas', trocaController.getAll);
router.post('/troca', trocaController.add);
router.delete('/troca/:id', trocaController.remove);
router.get('/trocas/busca', trocaController.search);
export default router;