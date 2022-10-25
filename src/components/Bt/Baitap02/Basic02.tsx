import React from "react";
import image from "../Baitap02/2.jpg";
import "./Styles.css";

type Props = {};

function Basic02({}: Props) {
  return (
    <>
      <h1> Basic02 </h1>
      <div className="wrap1">
        <div className="col">
          <img src={image} alt=""/>
        </div>
        YOUNG SHOP<hr/>
        <p className="text1">Samsung UHD TV 24inch</p>
        <div className="stars">
          <form action="">
            <input
              className="star star-5"
              id="star-5"
              type="radio"
              name="star"
            />
            <label className="star star-5" htmlFor="star-5"></label>
            <input
              className="star star-4"
              id="star-4"
              type="radio"
              name="star"
            />
            <label className="star star-4" htmlFor="star-4"></label>
            <input
              className="star star-3"
              id="star-3"
              type="radio"
              name="star"
            />
            <label className="star star-3" htmlFor="star-3"></label>
            <input
              className="star star-2"
              id="star-2"
              type="radio"
              name="star"
            />
            <label className="star star-2" htmlFor="star-2"></label>
            <input
              className="star star-1"
              id="star-1"
              type="radio"
              name="star"
            />
            <label className="star star-1" htmlFor="star-1"></label>
          </form>
          <h5>$599</h5>
        </div>
      </div>
    </>
  );
}

export default Basic02;
