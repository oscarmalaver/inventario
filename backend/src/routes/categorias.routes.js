import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/api/categorias",categoriaController.getCategorias)

export default router;