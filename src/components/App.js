import { useState } from "react";
import Article from "./Article";
import Form from "./Form";
import { ArticleContext } from "../contexts/ArticleContext";
import "../styles/App.css";

function App() {
  const articleFormat = {
    images: [],
    categoryColor: "#e12624",
    categoryName: "חופש",
    title: "סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה ",
    subTitle:
      "גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוצים הן תוכניות אוכל. תכנית",
    author: "ישראלי",
  };

  const [article, setArticle] = useState(articleFormat);

  return (
    <div className="App">
      <ArticleContext.Provider value={{ article, setArticle }}>
        <Form />
        <Article />
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
