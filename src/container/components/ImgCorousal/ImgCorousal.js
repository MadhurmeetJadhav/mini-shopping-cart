import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ImgCorousal.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const ImgCorousal = ({ imgL }) => {
  console.log(imgL);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === imgL.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imgL.length - 1 : slide - 1);
  };
  return (
    <div className="corousal">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {imgL.map((item, i) => {
        return (
          <img
            src={item.src}
            key={i}
            className={slide === i ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {imgL.map((_, i) => {
          return (
            <button
              key={i}
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default ImgCorousal;
