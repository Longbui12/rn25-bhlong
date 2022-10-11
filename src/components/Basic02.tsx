import React from "react";
import pictures from "./pictures/2.jpg";
type Props = {};

function Basic02({}: Props) {
  return (
    <>
      <h1>
        <u>Basic02:</u>
      </h1>
      <div className="row">
        <div className="col-12">
          <img src={pictures} alt="" />
          <div className="demo1 p-5">
            <p>
              <u>Young Shop</u>
            </p>

            <span className="text" style={{ color: "blue" }}>
              Samsung UHD TV 24 Inch
            </span>
          
          <div id="rating">
            <input type="radio" id="star5" name="rating" value="5" />
            <label
              className="full"
              htmlFor="star5"
              title="Awesome - 5 stars"
            ></label>

            <input type="radio" id="star4" name="rating" value="4" />
            <label
              className="full"
              htmlFor="star4"
              title="Pretty good - 4 stars"
            ></label>

            <input type="radio" id="star3" name="rating" value="3" />
            <label
              className="full"
              htmlFor="star3"
              title="Meh - 3 stars"
            ></label>

            <input type="radio" id="star2" name="rating" value="2" />
            <label
              className="full"
              htmlFor="star2"
              title="Kinda bad - 2 stars"
            ></label>

            <input type="radio" id="star1" name="rating" value="1" />
            <label
              className="full"
              htmlFor="star1"
              title="Sucks big time - 1 star"
            ></label>
            <h2>$599</h2>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic02;
