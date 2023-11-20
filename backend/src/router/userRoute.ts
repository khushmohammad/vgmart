import { Router } from "express";
import { userList,routTest } from "../controller/userController";
const router: Router = Router();

router.get("/", routTest);
router.get("/uselist/:userid", userList);
router.get("/", userList);



export const user = router;
