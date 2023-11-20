import { Router } from "express";
import { routTest, getVegList } from "../controller/vegController";

const router: Router = Router();

router.get("/", routTest);
router.get("/get/vegetables", getVegList);

export const vegetables = router;
