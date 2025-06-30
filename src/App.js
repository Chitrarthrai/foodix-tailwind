import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import ScriptLoader from "./components/ScriptLoader";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <ScriptLoader />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu-v1" element={<Menu />} />
          <Route path="/menu-v2" element={<Menu />} />
          <Route path="/menu-v3" element={<Menu />} />
          <Route path="/menu-details" element={<Menu />} />
          <Route path="/beef" element={<Home />} />
          <Route path="/burger" element={<Home />} />
          <Route path="/pizza" element={<Home />} />
          <Route path="/sushi" element={<Home />} />
          <Route path="/history" element={<About />} />
          <Route path="/chefs" element={<About />} />
          <Route path="/faq" element={<About />} />
          <Route path="/products" element={<Menu />} />
          <Route path="/cart" element={<Menu />} />
          <Route path="/checkout" element={<Menu />} />
          <Route path="/blog-grid" element={<About />} />
          <Route path="/blog-classic" element={<About />} />
          <Route path="/blog-details" element={<About />} />
          <Route path="/404" element={<About />} />
          <Route path="/services" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
