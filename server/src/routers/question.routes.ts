import express, { Request, Response }  from "express";
import { getAllQuestion } from "../controllers/question.controller";


const questionRouter = express.Router();

questionRouter.get("/",getAllQuestion)

// questionRouter.get("/question/:id",getOneQuestion   )

// questionRouter.post("/question/:id",addQuestion )






export default questionRouter;


