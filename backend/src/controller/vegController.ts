import { Request, Response } from "express";
import { vegetables } from "../db/schema/vegetables.schema";

export const routTest = (req: Request, res: Response) => {
  res.send("Welcome to test route!");
  res.end();
};
export const getVegList = async (req: Request, res: Response) => {
  const vegetablesData = await vegetables.find();
  res.json(vegetablesData);
  res.end();
};

export const addVegItem = async (req: Request, res: Response) => {
  const data = {
    ...req.body,
    createdAt: new Date().toString(),
  };
  try {
    const vegetablesData = await vegetables.create(data);
    res.json(vegetablesData);
  } catch (err) {
    console.log(err);
  }

  res.end();
};

export const updateVegItem = async (req: Request, res: Response) => {
  const update = {
    ...req.body,
    updatedAt: new Date().toString(),
  };
  const filter = { _id: req.params.id };
  try {
    const vegetablesData = await vegetables.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });
    res.json(vegetablesData);
  } catch (err) {
    console.log(err);
  }

  res.end();
};

export const deleteVegItem = async (req: Request, res: Response) => {
  const filter = { _id: req.params.id };

  try {
    const vegetablesData = await vegetables.deleteOne(filter);
    res.json(vegetablesData);
  } catch (err) {
    console.log(err);
  }

  res.end();
};
