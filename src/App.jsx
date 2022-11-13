import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connect from "../components/ConnectWallet";
import Home from "./Home";
import PlaceToStay from "./PlaceToStay";

export default function App() {
  return (
    // <Connect />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
    </Router>
  );
}
