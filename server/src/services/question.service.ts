import pool from "../utils/database";
import mysql from "mysql2/promise";

export const getAllQuestionMysql= async (category_id:number, limit:number, level:string)=> {
    const products = mysql.createPool(pool);
    const [question] = await products.execute(`select * from question where question.category_id = ? and level = ? limit  ${limit} ` ,[category_id,level]  );
    return question
};
export const getOneQuestionMysql = async (id : number) => {
    const products = mysql.createPool(pool)
    const [rows] = await products.execute("SELECT * FROM question WHERE question_id = ?", [id])
    return rows 
};
export const getAnswerOnQuestionMysql = async (id : number) => {
    const products = mysql.createPool(pool);
    const [answer] = await products.execute("SELECT * FROM `question` JOIN answer ON question.question_id = answer.question_id WHERE question.question_id = ?",
    [id]);
    return answer
}
export const addQuestionMysql = async (categoryId : number, content : string, level : number) => {
    const products = mysql.createPool(pool);
    const [question] = await products.execute("INSERT INTO question (category_id, content, level) VALUES (?, ?, ?)", [categoryId, content, level]);
}

