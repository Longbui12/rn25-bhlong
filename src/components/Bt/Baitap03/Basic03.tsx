import React from "react";
import image from "../Baitap03/3.jpg";
import "./Styles.css";
type Props = {};

function Basic03({}: Props) {
  return (
    <>
      <h1> Basic03 </h1>

      <div className="wrap1">
        <div className="col">
          <img
            src={image}
            alt=""
            style={{ width: "99%", height: "300px", paddingTop: "2px" }}
          />
        </div>
        <p className="text">Technology</p>
        <h5>Harman Kadon Onyx Studio Mini, Reviews & Experiences</h5>
        <span id="text1"> Feb 21,2021 by </span>drurion
      </div>
    </>
  );
}

export default Basic03;
