import React from "react";
import image from "../Baitap01/1.jpg";
import "./Styles.css";
type Props = {};

function Basic01({}: Props) {
  return (
    <>
      <h1> Basic01 </h1>
      <div className="wrap">
        <div className="left-column">
          <img src={image} alt="" />
        </div>
        <div className="right-column">
          <h2>Clothing & Apparel</h2>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Kid's Fashion</p>
          <p>Mens</p>
        </div>
      </div>
    </>
  );
}

export default Basic01;
