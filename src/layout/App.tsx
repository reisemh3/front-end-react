// import logo from './../logo.svg';
import './App.css';
import Acceuil from "./../pages/accueil/Accueil";
import Livres from "./../pages/livres/Livres";
import Recherches from "./../pages/recherches/Recherches";

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
          <Route path="/livres" element={<Livres key={"livres-"} />} />
          <Route path="/recherches" element={<Recherches key={"recherches-"} />} />
        </Routes>
    </>
  );
}

export default App;
