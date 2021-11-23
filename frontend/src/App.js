import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./views/Homepage";
import Details from "./views/Details";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
