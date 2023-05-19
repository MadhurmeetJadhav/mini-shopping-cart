import React, { useState } from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className="header-container">
      {/* <div className="header-design">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e9ecef   "
            fill-opacity="0.44"
            d="M0,256L80,213.3C160,171,320,85,480,69.3C640,53,800,107,960,144C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="header-title">
        <h1>E-SHooooP</h1>
      </div> */}

      <Link to={"./"} className="header-title">
        <p>e-Shop</p>
      </Link>

      <SearchBar />
      <div className="burger-icon" onClick={() => setBurger(true)}>
        <GiHamburgerMenu className="icons" />
      </div>
      <BurgerNav className="burger-nav" show={burger}>
        <HiOutlineArrowRight
          className="back-icon"
          onClick={() => setBurger(false)}
        />

        <div>
          <Link> My Prof </Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </div>
      </BurgerNav>
    </div>
  );
};

export default Header;

const BurgerNav = styled.div`
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
`;
