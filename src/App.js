import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import About from "./pages/About"; 


import OS from "./pages/OS";
import VLSI from "./pages/VLSI";
import DSP from "./pages/DSP";
import DSDV from "./pages/DSDV";
import DBMS from "./pages/DBMS";
import Networks from "./pages/Networks";
import DSA from "./pages/DSA";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/os" element={<OS />} />
        <Route path="/vlsi" element={<VLSI />} />
        <Route path="/dsp" element={<DSP />} />
        <Route path="/dsdv" element={<DSDV />} />
        <Route path="/dbms" element={<DBMS />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/dsa" element={<DSA />} />
      </Routes>
    </Router>
  );
}

export default App;