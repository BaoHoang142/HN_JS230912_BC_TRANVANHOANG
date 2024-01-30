import pool from "../utils/database";
import mysql from "mysql2/promise";

export const getAllCateMysql= async ()=> {
    const result = mysql.createPool(pool);
    return result.execute("SELECT * FROM category");
};
export const getOneCateMysql= async (id:number)=> {
    const result = mysql.createPool(pool);
    return result.execute("SELECT * FROM category WHERE category_id=?;",[id]);
};

export const addCateMysql= async (name:string)=> {
    const todo = mysql.createPool(pool);
    const [result] = await todo.execute("INSERT INTO category (name) VALUES (?);",[name]);
    return result
}