import logo from './../logo.svg';
import './App.css';
import Acceuil from "./../pages/accueil/Accueil";
import Livres from "./../pages/livres/Livres";
import Recherches from "./../pages/recherches/Recherches";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import AppHeader, { AppHeaderProps } from './AppHeader';


// build an instance of our AppHeaderProps to pass to the AppHeader component
const headerProps: AppHeaderProps = {
  title: 'My Dive Log',
  description: 'Log, Track, Review your dive logs and relive the experience',
  links: [
    {
      label: 'Logs',
      route: '/logs/list',
    },
    {
      label: 'New Entry',
      route: '/logs/create',
    },
  ],
};


function App() {
  return (
    <>
      <main className="App">
        <AppHeader
          title={headerProps.title}
          description={headerProps.description}
          links={headerProps.links}
        />
      </main>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div> */}
        <Routes>
          <Route path="/" element={<Acceuil key={"accueil-"} />} />
          <Route path="/livres" element={<Livres key={"livres-"} />} />
          <Route path="/recherches" element={<Recherches key={"recherches-"} />} />
        </Routes>
    </>
  );
}

export default App;
