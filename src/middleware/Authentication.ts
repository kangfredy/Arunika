import { Response, NextFunction } from "express";
import { CommonRequest } from "../interface/authentication/Request/authenticate";
import jwt from "jsonwebtoken";

// Middleware untuk autentikasi menggunakan JWT
const authenticateJWT = (
  req: CommonRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.sendStatus(403);
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

export default authenticateJWT;
