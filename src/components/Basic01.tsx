import React from "react";
import pictures from "./pictures/1.jpg";
type Props = {};

function Basic01({}: Props) {
  return (
    <>
      <h1><u>Basic01:</u></h1>
      <div className="row">
      <div className="col-12">
      <img src={pictures} alt="" className="photo" style={{ float: "left" }} />
      <div className="demo" style={{ textAlign: "left", float: "left" }}>
        <h2>Clothing & Apparel</h2>
        <p>Accessories</p>
        <p>Bags</p>
        <p>Kid's Fashion</p>
        <p>Mens</p>
      </div>
      </div>
      </div>
    </>
  );
}

export default Basic01;
