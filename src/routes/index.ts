import type { Express } from "express";
import { loginController } from "../controller/authentication";

export const v1Router = (app: Express) => {
  app.post("/v1/login", loginController);
};
