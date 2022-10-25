import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Listpage from "./Listpage";
import Form from "./Form";
import DetailUser from "./DetailUser";
import Detail from "./Detail";
//import styles from "./styles.module.css";
import Navi from "./Navi";
import Home from "./Home";
function Routers() {
  return (
    <>
      <BrowserRouter>
        {/*<ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/list">List</Link>
          </li>
          <li className={styles.link}>
            <Link to="/Form">Form</Link>
          </li>
          <li className={styles.link}>
            <Link to="/Detail">Detail</Link>
          </li>
         </ul>*/}
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Listpage />} />
          <Route path="/FormPage" element={<Form />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/list/Detail/:id" element={<DetailUser />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
