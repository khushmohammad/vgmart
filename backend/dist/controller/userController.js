"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userList = exports.routTest = void 0;
const routTest = (req, res) => {
    res.send("Welcome to test route!");
    res.end();
};
exports.routTest = routTest;
const userList = (req, res) => {
    const param = JSON.stringify(req.query);
    res.send("hello user controller is " + param);
    res.end();
};
exports.userList = userList;
