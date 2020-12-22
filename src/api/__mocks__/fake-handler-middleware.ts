// Dependencies
import { NextFunction, Request, Response } from "express";

export default {
  handler: () => {
    return (req: Request, res: Response, next: NextFunction) => {
      next();
    }
  }
};
