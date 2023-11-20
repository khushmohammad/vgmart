import { Router } from "express";
import { routTest } from "../controller/userController";
const router: Router = Router();

router.get("/", routTest);

export const crud = router;
