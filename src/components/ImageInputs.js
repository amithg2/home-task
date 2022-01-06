import React, { useState } from "react";
import Input from "../Input";
import "../styles/ImageInputs.css";

function ImageInputs() {
  const [numOfImg, setNumOfImg] = useState(1);
  const addInput = (e) => {
    e.preventDefault();
    let num = numOfImg;
    num++;
    setNumOfImg(num);
  };

  const makeInputs = () => {
    const newArr = [];
    for (let i = 0; i < numOfImg; i++) {
      newArr.push(<Input key={i} idx={i} />);
    }
    return newArr;
  };

  return (
    <div className="ImageInputs">
      <p>תמונות</p>
      {makeInputs()}
      <div className="addImageBtn" onClick={addInput}>
        {" "}
        הוסף תמונה
      </div>
    </div>
  );
}

export default ImageInputs;
