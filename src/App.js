import react from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
