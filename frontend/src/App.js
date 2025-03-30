import React from "react";
import "./App.css";
import Contact from "./Contact";
import Create from "./CRUD/Create";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Home from "./Home";
import ReadAll from "./CRUD/ReadAll";
import ReadOne from "./CRUD/ReadOne";
import Services from "./Services";
import Update from "./CRUD/Update";
import Temp from "./Temp";
const App = () => {
  return (
    <div>
      {/* <Contact/> */}
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/create" element={<Create />} />
        <Route path="/team" element={<ReadAll />} />
        <Route path="/readOne/:id" element={<ReadOne />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/temp/" element={<Temp />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
