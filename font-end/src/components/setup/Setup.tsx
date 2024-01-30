import React, { useEffect } from "react";
import "./Setup.css";
import axios from "axios";

interface Category {
  category_id: number;
  name: string;
}
interface Question {
  question_id: number;
  category_id: string;
  created_at: any;
  content: string;
  level: string;
}

export default function Setup() {
  const [category, setCategory] = React.useState<Category[]>([]);
  const [question, setQuestion] = React.useState<Question[]>([]);
  const [flag, setflag] = React.useState<boolean>(false);
  const [level, setLevel] = React.useState<string[]>([]);
  async function getCategory() {
    try {
      const db = await axios.get("http://localhost:8080/api/v1/category/");
      setCategory(db.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getQuestion() {
    try {
      const db = await axios.get("http://localhost:8080/api/v1/question/");
      setQuestion(db.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(question)
  useEffect(() => {
    getCategory();
    getQuestion();
  }, [flag]);

  return (
    <>
      <div id="container">
        <div className="main">
          <div className="main__header">
            <h1>Setup Quizz</h1>
          </div>
          <div className="main__form">
            <div className="main__form--input">
              <div className="main__form--input__title">
                <p>Number of questions</p>
              </div>
              <div className="main__form--input__input">
                <input type="text" className="input" />
              </div>
            </div>
            <div className="main__form--input">
              <div className="main__form--input__title">
                <p>Category</p>
              </div>
              <div className="main__form--input__input">
                <select name="" id="" className="input">
                  <option value="">Chọn thể loại</option>
                  {category.map((item) => (
                    <option value={item.category_id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="main__form--input">
              <div className="main__form--input__title">
                <p>Level</p>
              </div>
              <div className="main__form--input__input">
                <select name="" id="" className="input">
                  <option value="">Chọn mức độ</option>
                  <option value="">easy</option>
                  <option value="">normal</option>
                  <option value="">hard</option>
                </select>
              </div>
            </div>
            <div className="main__form--input">
              <div className="main__form--input__input">
                <button className="input btn">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
