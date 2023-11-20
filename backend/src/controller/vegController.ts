import { Request, Response } from "express";

import { vegetables as vegItems } from "./../mock/vegetables-list.json";

export const routTest = (req: Request, res: Response) => {
  res.send("Welcome to test route!");
  res.end();
};
export const getVegList = (req: Request, res: Response) => {
  res.json(vegItems);
  res.end();
};
