import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "./image/logo.png";

function App() {
  // const MAX_NUMBER = 100;
  //let age_person = 18;
  //let nameCar = { name: "value" };
  // let styles = { color: " red", fontSize: 18 };

  return (
    <>
      <div
        className="header text-center p-4"
        style={{ height: "100px", backgroundColor: "lightgrey" }}
      >
        <h1>The Pulpit Rock</h1>
      </div>
      <div className="row mt-5" style={{ height: "550px" }}>
        <div className="col-3 col-md-3">
          <p className="item p-3">The Drive</p>
          <p className="item p-3">The Walk</p>
          <p className="item p-3">The Return</p>
          <p className="item p-3">The End</p>
        </div>
        <div className="col-6 col-md-6 p-2">
          <h1>The Walk:</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <p>
            <img
              alt=""
              src={images}
              style={{ width: "98%", height: "300px" }}
            />
          </p>
        </div>
        <div className="col-3 col-md-3 bg-info" style={{ height: "350px" }}>
          <h1>What ?</h1>
          <p>
            The Pulpit Rock is a part of a mountain that looks like a pulpit.
          </p>
          <h2>Where ?</h2>
          <p>The Pulpit Rock is in Norway</p>
          <h3>Price?</h3>
          <p>The walk is free!</p>
        </div>
      </div>
      <div
        className="text-center"
        style={{
          height: "100px",
          backgroundColor: "lightgrey",
          marginTop: "5px",
        }}
      >
        This web page is a part of a demonstration of fluid web design made by
        www.w3schools.com. Resize the browser window to see the content response
        to the resizing.
      </div>
    </>
  );
}

export default App;
