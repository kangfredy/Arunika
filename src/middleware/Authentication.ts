import type { Response, NextFunction } from "express";
import type { CommonRequest } from "../interface/authentication/Request/authenticate";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

// middleware for authenticate JWT
const authenticateJWT = (
  req: CommonRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.sendStatus(403);
  }
  jwt.verify(token, process.env.SECRET_KEY as string, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = {
      username: user as string,
      email: user as string,
    };
    next();
  });
};

export const generateAccessToken = (userData: any) => {
  const payload = userData;
  return jwt.sign(payload, process.env.SECRET_KEY as string, {
    algorithm: "HS256",
  });
};

export default authenticateJWT;
