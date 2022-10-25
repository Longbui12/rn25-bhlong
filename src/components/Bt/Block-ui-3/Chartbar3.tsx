import React from "react";
import "./Styles3.css";
import unnamed from "../Block-ui-3/unnamed.png";
type Props = {};

function Chartbar3({}: Props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 bg-primary">
            <h1>f</h1>
            <br/>
            <span className="text1">Facebook</span>
            <br/>
            <p className="text2">5,00,000 Likes</p>
          </div>
          <div className="col-sm-3 " style={{ backgroundColor: "#1DA1F2" }}>
            <img src={unnamed} alt=""></img>
            <br/>
            <span className="text3">Twitter</span>
            <br/>
            <p className="text4">40,000 Tweets</p>
          </div>
          <div className="col-sm-3 bg-warning">cot 3</div>
          <div className="col-sm-3 bg-danger">cot 4</div>
        </div>
      </div>
    </>
  );
}

export default Chartbar3;
