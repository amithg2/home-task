import React, { useState } from "react";
import defaultImage from "./images/Living+Room+1b.jpg";
import "./ImageCarousel.css";

function ImageCarousel({ images }) {
  const [curImage, setCurImage] = useState(0);

  const handleArrowClick = (side) => {
    if (side === "right") {
      let num = curImage;
      num++;
      if (num >= images.length) num = 0;
      setCurImage(num);
    } else {
      let num = curImage;
      num--;
      if (num < 0) num = images.length - 1;
      setCurImage(num);
    }
  };

  return (
    <div className="ImageCarousel">
      <div className="arrowWrapper">
        <div
          style={{ display: images.length > 1 ? "block" : "none" }}
          className="arrow rightArrow"
          onClick={() => {
            handleArrowClick("right");
          }}
        >
          <p>&#8249;</p>
        </div>
        <div
          style={{ display: images.length > 1 ? "block" : "none" }}
          className="arrow leftArrow"
          onClick={() => {
            handleArrowClick("left");
          }}
        >
          <p>&#8250;</p>
        </div>
      </div>
      <div className="hoverEffect">
        {images.length && images[curImage] ? (
          <img src={images[curImage].url} />
        ) : (
          <img src={defaultImage} />
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;
