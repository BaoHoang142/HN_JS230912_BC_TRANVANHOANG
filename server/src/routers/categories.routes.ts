import express, { Request, Response }  from "express";
import { addCate, getAllCate, getOneCate } from "../controllers/categories.controller";


const categoryRouter = express.Router();

categoryRouter.get("/",getAllCate)

categoryRouter.get("/:id",getOneCate)

categoryRouter.post("/:id",addCate)






export default categoryRouter;


