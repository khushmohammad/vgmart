import { Router } from "express";
import {
  routTest,
  getVegList,
  addVegItem,
  updateVegItem,
  deleteVegItem,
} from "../controller/vegController";

const router: Router = Router();

router.get("/", routTest);
router.get("/vegetables", getVegList);
router.post("/vegetables", addVegItem);
router.patch("/vegetables/:id", updateVegItem);
router.delete("/vegetables/:id", deleteVegItem);

export const vegetables = router;
