import { RequestValidator } from "fastest-express-validator";
import { responseHandle } from "../helper/response";

export const validationMiddleware = (
  schema: any,
  type: "body" | "query" | "params"
) => {
  return RequestValidator({ [type]: schema }, (err, req, res, next) => {
    responseHandle(res, {
      status: 400,
      message: "validation error",
      data: err.body,
      success: false,
    });
  });
};
