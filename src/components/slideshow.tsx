import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { pictureArray } from "../TeamInfo.tsx";
import "./slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === pictureArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Set up timer to switch slides every 3 seconds (adjust as needed)
    const interval = setInterval(nextSlide, 5000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(interval);
    }, []);

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
          <Link to={picture.link} onClick={() => window.scrollTo(0, 0)}>
            <img className="slideImage" src={picture.src} alt={picture.alt} style={{ width: "100%" }} />
          </Link>
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

