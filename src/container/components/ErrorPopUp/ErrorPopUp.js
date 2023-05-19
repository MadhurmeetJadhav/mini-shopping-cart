import React from "react";
import "./ErrorPopUp.scss";
import { GiCrossMark } from "react-icons/gi";
import "animate.css";

const ErrorPopUp = ({ setModal }) => {
  return (
    <div className="error-container">
      <div className="modalpop animate__backInDown">
        <GiCrossMark className="cross-icon" onClick={() => setModal(false)} />
        <div className="errorTet">
          <p>Search Box is Empty, Your Brain isn't!!!</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopUp;
