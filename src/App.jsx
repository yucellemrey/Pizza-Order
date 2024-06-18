import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import OrderPage from "./components/OrderPage";
import OrderComplete from "./components/OrderComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/orderComplete" element={<OrderComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
