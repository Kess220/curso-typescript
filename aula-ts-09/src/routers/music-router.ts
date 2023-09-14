import { Router } from "express";
import musicController from "../controllers/music-controller";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", musicController.createMusic); // TODO: validação via Joi

export default musicRouter;