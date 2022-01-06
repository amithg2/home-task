import React, { useContext } from "react";
import ImageInputs from "./ImageInputs";
import { ArticleContext } from "../contexts/ArticleContext";
import "../styles/Form.css";

function Form() {
  const { setArticle, article } = useContext(ArticleContext);
  const makeOptions = () => {
    const colors = [
      { color: "#e12624", name: "אדום" },
      { color: "#1417ac", name: "כחול" },
      { color: "#09cf46", name: "ירוק" },
    ];
    const newArr = colors.map((e, i) => {
      return (
        <option
          key={i}
          value={e.color}
          defaultValue={article.categoryColor === e ? true : false}
        >
          {e.name}
        </option>
      );
    });
    return newArr;
  };

  return (
    <div className="Form">
      <div className="ImageInputs">
        <ImageInputs />
      </div>
      <div className="inputs">
        <label>
          <p>צבע רקע - שם קטגוריה</p>
          <select
            onChange={(e) =>
              setArticle({ ...article, categoryColor: e.target.value })
            }
          >
            {makeOptions()}
          </select>
        </label>
        <label>
          שם קטגוריה
          <input
            type="text"
            name="categoryName"
            value={article.categoryName}
            onChange={(e) =>
              setArticle({ ...article, categoryName: e.target.value })
            }
          />
        </label>
        <label>
          כותרת
          <textarea
            name="title"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
          ></textarea>
        </label>
        <label>
          כותרת משנה
          <textarea
            name="subTitle"
            value={article.subTitle}
            onChange={(e) =>
              setArticle({ ...article, subTitle: e.target.value })
            }
          ></textarea>
        </label>
        <label>
          שם מחבר
          <input
            type="text"
            name="name"
            value={article.author}
            onChange={(e) => setArticle({ ...article, author: e.target.value })}
          />
        </label>
      </div>
    </div>
  );
}

export default Form;
