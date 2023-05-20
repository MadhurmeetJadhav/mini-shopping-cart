import React from "react";
import "./ProductComponent.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const Products = useSelector((state) => state.allProducts.products);
  const renderList = Products.map((product) => {
    return (
      <div className="card" key={product.id}>
        {/* ${product.id} */}
        <Link to={`/product/${product.id}`}>
          <div className="img-card">
            <img src={`${product.images[0]}`} alt="" />
          </div>
          <div className="add-cart">Show Details</div>
        </Link>

        <div className="info-card">
          <p>
            <strong>{product.title}</strong>
          </p>
          <p>Price : {product.price} $</p>
        </div>
      </div>
    );
  });
  return <div className="ProductDetails-Container">{renderList}</div>;
};

export default ProductComponent;
