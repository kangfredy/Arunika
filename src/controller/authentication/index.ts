import type { Response } from "express";
import type { ILoginRequest } from "../../interface/authentication/Request/login";

export const loginController = async (req: ILoginRequest, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  res.status(200).json({ message: "v1 login" });
};
