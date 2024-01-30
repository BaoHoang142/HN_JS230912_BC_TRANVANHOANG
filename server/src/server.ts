import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser"
import cors from "cors"
import categoryRouter from "./routers/categories.routes";
import questionRouter from "./routers/question.routes";
dotenv.config();
const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
const PORT: number = 8080;


app.use("/api/v1/category",categoryRouter)
app.use("/api/v1/question",questionRouter)


app.listen(PORT, () => {
    console.log("server dang chay tai cong " + PORT);
})
