import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/action/productAction";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductComponent from "../ProductComponent/ProductComponent";

const ProductListing = () => {
  const Products = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(Products);
  const fetchingProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products?limit=100")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data.products));
  };
  useEffect(() => {
    fetchingProducts();
  }, []);

  // console.log(Products);

  return (
    <div className="ProductListing-Container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
