import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Reserve from "./pages/Reserve/Reserve";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/reserve" element={<Reserve/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
