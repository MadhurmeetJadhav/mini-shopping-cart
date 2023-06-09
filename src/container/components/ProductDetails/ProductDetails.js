import React, { useState } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import ShowProductDetails from "../ShowProductDetails/ShowProductDetails";
import { TiArrowBack } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import ImgCorousal from "../ImgCorousal/ImgCorousal";

const ProductDetails = () => {
  const { productId } = useParams();

  const [popUpToggle, SetPopUpToggle] = useState(false);

  const popUp = (res) => {
    SetPopUpToggle(res);
  };

  const product = useSelector((state) => state.allProducts.products);
  const list = product.filter((products) => {
    return products.id == productId;
  });
  // console.log(list);
  const imagesList = list.map((product) => {
    return product.images;
  });
  const renderList = list.map((product) => {
    return (
      <div className="Product-Container">
        <div className="image-contianer">
          <div className="image">
            {/* <img src={`${product.images[0]}`} /> */}
            {/* <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 20,
                strech: 25,
                depth: 100,
                modifier: 1,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="Swiper-Container"
            >
              {product.images.map((img, i) => {
                return (
                  <SwiperSlide className="swiper-slide">
                    <img src={img} alt="Slider " />
                  </SwiperSlide>
                );
              })}

              <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                  
                </div>
                <div className="swiper-button-next slider-arrow">
                  
                </div>
                <div className="swiper-pagination"> </div>
              </div>
            </Swiper> */}
            <ImgCorousal imgL={product.images} />
          </div>
          {/* <div className="Show-more" onClick={() => popUp(true)}>
            Show More +
          </div> */}
        </div>
        <div className="detail-container">
          <div className="product-title">
            <h2>{product.title}</h2>
          </div>
          <div className="product-rating-avilability-brand">
            <div className="ratings">
              <FaStar className="icon" /> <span> {product.rating} </span>
            </div>
            <>|</>
            <div className="brand"> {product.brand} </div>
            <>|</>
            <div className="availability"> Available : {product.stock} </div>
          </div>
          <div className="product-details">
            <div className="details">
              <p> {product.description} </p>
            </div>
          </div>
          <div className="product-price"> $ {product.price} /-</div>
          <div className="buttons">
            <>
              <button>Add to Cart!</button>
            </>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {renderList}
      {popUpToggle && (
        <div className="pop-up-container">
          <div className="pop-up-icon" onClick={() => popUp(false)}>
            {/* <TiArrowBack className="back-icon" /> */}
            <p className="Pop-tet">Back</p>
          </div>
          <div className="pop-up-card">
            <ShowProductDetails images={imagesList} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
