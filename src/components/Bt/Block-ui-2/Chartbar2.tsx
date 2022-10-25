import React from "react";
import "./Styles2.css";
import Picture from "../../Bt/Block-ui-2/Picture.png";
type Props = {};

function Chartbar2({}: Props) {
  return (
    <>
      <img src={Picture} alt=""></img>
      <h2 id="text">HTML</h2>
      <div className="Wrap">
        <div className="left-column"></div>
      </div>
    </>
  );
}

export default Chartbar2;
