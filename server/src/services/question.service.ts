import pool from "../utils/database";
import mysql from "mysql2/promise";

export const getAllQuestionMysql= async ()=> {
    const result = mysql.createPool(pool);
    return result.execute("SELECT * FROM question");
};