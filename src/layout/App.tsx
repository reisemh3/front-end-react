// import logo from './../logo.svg';
import './App.css';
import Acceuil from "./../pages/accueil/Accueil";

import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
        <Routes>
          <Route path="/" element={<Acceuil key={"accueil-"} />} />
          <Route path="/accueil" element={<Acceuil key={"accueil-"} />} />
        </Routes>
    </>
  );
}

export default App;
