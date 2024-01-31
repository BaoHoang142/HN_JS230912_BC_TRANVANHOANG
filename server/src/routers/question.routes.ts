import express, { Request, Response }  from "express";
import { addQuestion, getAllQuestion, getAnswerOnQuestion, getOneQuestion } from "../controllers/question.controller";


const questionRouter = express.Router();

questionRouter.get("/",getAllQuestion)

questionRouter.get("/:id",getOneQuestion)

questionRouter.get("/:id/answer",getAnswerOnQuestion)

questionRouter.post("",addQuestion)


export default questionRouter;


