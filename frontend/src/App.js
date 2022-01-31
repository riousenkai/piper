import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./store/components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
