import "./App.scss";
import React from "react";
import Header from "./container/components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./container/components/ProductListing/ProductListing";
import ProductDetails from "./container/components/ProductDetails/ProductDetails";
import PageNotFound from "./container/components/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
