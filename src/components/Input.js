import React, { useState, useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";

function Input({ idx }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isFile, setIsFile] = useState(false);
  const { article, setArticle } = useContext(ArticleContext);

  const handleDeleteImg = (e) => {
    e.preventDefault();
    const newArr = article.images.filter((e) => e.id !== idx);
    setArticle({ ...article, images: newArr });
    setIsDeleted(true);
  };

  const handleImageChangeInput = (e) => {
    e.preventDefault();

    const selected = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e) => {
      setArticle({
        ...article,
        images: [...article.images, { id: idx, url: e.target.result }],
      });
    };
    reader.readAsDataURL(selected);
    setIsFile(true);
  };
  return (
    <div style={{ display: isDeleted && "none" }} className="Input">
      <input
        style={{ color: isFile ? "black" : "white" }}
        type="file"
        className="fileInput"
        accept="image/*"
        onChange={handleImageChangeInput}
      />

      <div className="button" onClick={(e) => handleDeleteImg(e)}>
        מחק
      </div>
    </div>
  );
}

export default Input;
