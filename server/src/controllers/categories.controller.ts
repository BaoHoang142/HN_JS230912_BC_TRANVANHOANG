import { Request, Response } from "express";
import { addCateMysql, getAllCateMysql, getOneCateMysql } from "../services/categories.service";



export const getAllCate = async (req: Request, res: Response) => {
    try {
      const result = await getAllCateMysql();
      console.log(result);
      res.status(200).json({
        message: "thanh cong lay tat ca",
        data: result[0],
      });
    } catch (error) {
      console.log("error", error);
    }
};

export const getOneCate = async (req: Request, res: Response) => {
    try {
      const result = await getOneCateMysql(+req.params.id);
      console.log(result);
      res.status(200).json({
        message: "thanh cong lay 1 user",
        data: result[0],
      });
    } catch (error) {
      console.log("error", error);
    }
}

export const addCate = async (req: Request, res: Response) => {
    console.log(req.body);
    const { name } = req.body;
    const result = await addCateMysql(name);
    if (!result) {
      res.status(500).json({
        message: "Có lỗi khi thêm",
      });
    } else {
      res.status(201).json({
        message: "them thanh cong",
        result,
      });
    }
}