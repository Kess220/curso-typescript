import { Router } from "express";
import controller from "../controllers/controller";

const router = Router();
router.get("/", controller.getInfo);

export default router;
