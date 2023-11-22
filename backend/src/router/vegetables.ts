import { Router } from "express";
import {
  routTest,
  getVegList,
  addVegItem,
  updateVegItem,
  deleteVegItem,
  getByIdVegItem,
} from "../controller/vegController";

const router: Router = Router();

router.get("/", routTest);
router.get("/vegetables", getVegList);
router.post("/vegetables", addVegItem);
router.patch("/vegetables/:id", updateVegItem);
router.delete("/vegetables/:id", deleteVegItem);
router.get("/vegetables/:id", getByIdVegItem);

export const vegetables = router;
