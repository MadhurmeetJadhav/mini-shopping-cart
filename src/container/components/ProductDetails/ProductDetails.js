import React from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();

  console.log(productId);
  const product = useSelector((state) => state.allProducts.products);
  const list = product.filter((products) => {
    return products.id == productId;
  });
  console.log(list);
  const renderList = list.map((product) => {
    return (
      <div className="Product-Container">
        <div className="image-contianer">
          <div className="image">
            <img src={`${product.images[0]}`} />
          </div>
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

  return <>{renderList}</>;
};

export default ProductDetails;
