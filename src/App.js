import React from "react";
import "./App.css";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
};

export default App;
