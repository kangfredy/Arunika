import type { Express, Request, Response } from "express";
import { login } from "../controller/authentication";

export const apiRoute = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "welcome to arunika " });
  });
  app.post("/v1/login", login);
};
