import React, { useState } from "react";
import "./SearchBar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FcUndo } from "react-icons/fc";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";

const SearchBar = () => {
  const product = useSelector((state) => state.allProducts.products);
  console.log(product);

  const [data, setData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [modal, setModal] = useState(false);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = product.filter((value) => {
      return value.brand.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setData([]);
    } else {
      setData(newFilter);
    }
  };

  const clearInput = () => {
    setData([]);
    setWordEntered("");
  };

  const newPage = () => {
    return <Link to={"/adsf"}></Link>;
  };
  return (
    <div className="search-container">
      <div className="search">
        <div className="search-box">
          <div className="search-field">
            <input
              placeholder="Search..."
              className="input"
              type="text"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="search-box-icon">
              <button className="btn-icon-content">
                {data.length === 0 ? (
                  <FcSearch
                    className="search-icon"
                    onClick={() => setModal(true)}
                  />
                ) : (
                  <FcUndo className="search-icon" onClick={clearInput} />
                )}
              </button>
            </div>
            {modal && <ErrorPopUp setModal={setModal} />}
          </div>
        </div>
      </div>
      {data.length !== 0 && (
        <div className="dataResult">
          {data.map((pdt, i) => {
            return (
              <Link to={`/product/${pdt.id}`} className="dataItem">
                <p>{pdt.brand}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
