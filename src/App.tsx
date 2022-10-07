import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const MAX_NUMBER = 100;
  //let age_person = 18;
  //let nameCar = { name: "value" };
  // let styles = { color: " red", fontSize: 18 };

  return (
    <>
      <h1
        style={{
          width: "100%",
          height: "60px",
          textAlign: "center",
          backgroundColor: "lightgray",
        }}
      >
        The Pulpit Rock
      </h1>
      <div className="row" style={{height:"700px"}}>
        <div
          className="col-md-2"
          style={{
            textDecoration: "underline",
            backgroundColor: "lightpink",
            height: "150px",
          }}
        >
          <p>The first</p>
          <p>The Second</p>
          <p>The third</p>
          <p>The fourth</p>
        </div>
        <div className="col-md-7">
          <h1> The Topic </h1>
          <p>
            The United States on Thursday imposed sanctions on a Myanmar
            businessman and two others involved in procuring Russian-made
            weapons from Belarus for the junta that seized power in the
            Southeast Asian country early last year, Secretary of State Antony
            Blinken said. The military staged a coup in February 2021, detaining
            democratic leaders including Nobel laureate Aung San Suu Kyi, then
            violently suppressed protests, sparking a spiraling conflict.
            <br />
          </p>
        </div>
        <div
          className="col-md-3 bg-primary"
          style={{ height: "400px", marginTop: "5px", marginBottom: "2px" }}
        >
          <h2>What's your name?</h2>
          <p>My name is...</p>
          <h3>Where are you from?</h3>
          <p>I am come from...</p>
          <h4>How do you feel today?</h4>
          <p>I'm fill so...</p>
        </div>
      </div>
      <h1
        className="footer"
        style={{
          height: "60px",
          textAlign: "center",
          backgroundColor: "lightgray",
          marginTop: "20px",
        }}
      >
        This Is The footer
      </h1>
    </>
  );
}

export default App;
