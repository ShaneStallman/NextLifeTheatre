import React, { useState } from "react";
import { pictureArray } from "../TeamInfo.tsx";
import "./slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n - 1);
  };

  const showSlides = (index) => {
    let newIndex = index;
    if (newIndex >= pictureArray.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = pictureArray.length - 1;
    }
    setSlideIndex(newIndex);
  };

  return (
    <div className="slideshow-container">
      {pictureArray.map((picture, index) => (
        <div
          className={`mySlides fade ${index === slideIndex ? "current" : ""}`}
          key={index}
        >
          <div className="numbertext">
            {index + 1} / {pictureArray.length}
          </div>
          <img src={picture.src} alt={picture.alt} style={{ width: "100%" }} />
          <div className="text">{picture.caption}</div>
        </div>
      ))}
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
      <br />
      <div style={{ textAlign: "center" }}>
        {pictureArray.map((_, index) => (
          <span
            className={`dot ${index === slideIndex ? "active" : ""}`}
            key={index}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

