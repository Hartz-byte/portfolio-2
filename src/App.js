import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
