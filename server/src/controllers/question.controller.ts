import { Request, Response } from "express";
import { addQuestionMysql, getAllQuestionMysql, getAnswerOnQuestionMysql, getOneQuestionMysql } from "../services/question.service";

export const getAllQuestion = async (req: Request, res: Response) => {
  const {category, limit, level} = req.query
    try {
      const result = await getAllQuestionMysql(Number(category),Number(limit) ,String(level));
      console.log(result);
      res.status(200).json({
        message: "thanh cong lay tat ca",
        data: result,
      });
    } catch (error) {
      console.log("error", error);
    }
};
export const getOneQuestion = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
      const result = await getOneQuestionMysql(id as unknown as number);
      res.status(200).json(result)
  } catch (error) {
      console.log(error)
  }
}
export const getAnswerOnQuestion = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
      const result = await getAnswerOnQuestionMysql(id as unknown as number);
      res.status(200).json(result)

  }catch (error) {
      console.log(error)
  }
}
export const addQuestion = async (req: Request, res: Response) => {
  const {categoryId,content,level} = req.body;
  const result = await addQuestionMysql(categoryId,content,level);
  res.status(201).json({
      message : "Thêm thành công"
  })

}