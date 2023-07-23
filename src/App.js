import React from "react";
import "./App.css";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
