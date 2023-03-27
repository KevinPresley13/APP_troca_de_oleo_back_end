import { Router } from "express";
import * as trocaController from "../controllers/trocaController";
const router = Router();

router.get('/troca', trocaController.home);

export default router;