import type { Express, Request, Response } from "express";

export const v1Router = (app: Express) => {
  app.post("/v1/login", (req: Request, res: Response) => {
    res.status(200).json({ message: "v1 login" });
  });
};
