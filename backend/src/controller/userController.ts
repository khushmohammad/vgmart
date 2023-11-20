import { Request, Response } from "express";
export const routTest = (req: Request, res: Response) => {
  res.send("Welcome to test route!");
  res.end();
};
export const userList = (req: Request, res: Response) => {
  const param = JSON.stringify(req.query);
  res.send("hello user controller is " + param);
  res.end();
};
