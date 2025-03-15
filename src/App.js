import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import FALA from "./components/FALA";
import OurImpact from "./components/Ourimpact";
import Media from "./components/Media";
import Blog from "./components/Blog";
import TV from "./components/TV";
import LIN from "./components/LIN";
import GiveNow from "./components/GiveNow"; // Import the new page
import Nominees from "./components/Nominees";
import Winners from "./components/Winners";
import Resources from "./components/Resources";
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fala" element={<FALA />} />
      <Route path="/our-impact" element={<OurImpact />} />
      <Route path="/media" element={<Media />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/lin" element={<LIN />} />
      <Route path="/tv" element={<TV />} />
      <Route path="/fala/nominees" element={<Nominees />} />
        <Route path="/fala/winners" element={<Winners />} />
        <Route path="/fala/resources" element={<Resources />} />
        <Route path="/give-now" element={<GiveNow />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
