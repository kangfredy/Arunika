import { CommonResponse } from "../../interface/Common/commonResponse";
import { Response } from "express";

export const responseHandle = (
  res: Response,
  value: CommonResponse<unknown>
) => {
  return res
    .status(value.status)
    .json({ success: value.success, message: value.message, data: value.data });
};
