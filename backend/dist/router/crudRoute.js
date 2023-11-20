"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crud = void 0;
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.get("/", userController_1.routTest);
exports.crud = router;
