import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css"
import Drinks from "./pages/drinks/Drinks";
import Icecream from "./pages/icecream/Icecream";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/icecream" element={<Icecream />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
