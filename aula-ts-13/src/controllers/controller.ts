import { Request, Response } from "express";

function getInfo(req: Request, res: Response) {
  res.send("Hello!");
}

const controller = {
  getInfo,
};

export default controller;
