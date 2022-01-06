import React, { useContext } from "react";
import { ArticleContext } from "./contexts/ArticleContext";
import ImageCarousel from "./ImageCarousel";
import "./Article.css";

function Article() {
  const { article } = useContext(ArticleContext);
  return (
    <div className="Article">
      <ImageCarousel images={article.images} />
      <div>
        <h4
          className="categoryName"
          style={{ background: article.categoryColor }}
        >
          {article.categoryName}
        </h4>
        <h1 className="title">{article.title}</h1>
        <p className="subTitle">{article.subTitle}</p>
        <p className="author">{article.author}</p>
      </div>
    </div>
  );
}

export default Article;
