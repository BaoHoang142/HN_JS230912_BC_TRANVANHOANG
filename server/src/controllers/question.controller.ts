import { Request, Response } from "express";
import { getAllQuestionMysql } from "../services/question.service";

export const getAllQuestion = async (req: Request, res: Response) => {
    try {
      const result = await getAllQuestionMysql();
      console.log(result);
      res.status(200).json({
        message: "thanh cong lay tat ca",
        data: result[0],
      });
    } catch (error) {
      console.log("error", error);
    }
};