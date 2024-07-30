import type { Request } from "express";

export interface ILoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}
