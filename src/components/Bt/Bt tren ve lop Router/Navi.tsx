import React from "react";
import { Link } from "react-router-dom";
function Navi() {
  console.log(Link.arguments)
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
            <Link className="nav-link " to="/" style={{color:'black'}}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/list" style={{color:'black'}}>
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/FormPage" style={{color:'black'}}>
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/Detail" style={{color:'black'}}>
              Detail
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navi;
