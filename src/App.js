import React from "react";
import "./App.css";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
};

export default App;
