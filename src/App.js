import React from "react";
import {Routes, Route} from 'react-router-dom';

//import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Detail from "./component/Detail";
import Cart from "./component/Cart";
import Default from "./component/Default";
import Modal from "./component/Modal";

function App() {
    return(
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<Default />} />
        </Routes>
        <Modal/>
      </React.Fragment>
    );
}

export default App;