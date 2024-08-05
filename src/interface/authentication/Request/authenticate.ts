import type { Request } from "express";

export interface CommonRequest extends Request {
  user: {
    username: string;
    email: string;
  };
}
