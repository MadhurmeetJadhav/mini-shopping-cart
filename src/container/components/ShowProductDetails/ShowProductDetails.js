import React from "react";

import "./ShowProductDetails.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const ShowProductDetails = (props) => {
  console.log(props.images);

  return (
    <div className="main-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          strech: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="Swiper-Container"
      >
        {props.images[0].map((img, i) => {
          return (
            <SwiperSlide className="swiper-slide">
              <img src={img} alt="Slider " />
            </SwiperSlide>
          );
        })}

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            {/* <GrCaretPrevious className="icon" /> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <GrCaretNext className="icon" /> */}
          </div>
          <div className="swiper-pagination"> </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ShowProductDetails;
