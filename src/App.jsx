import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderPage from "./components/OrderPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <OrderPage />
    </div>
  );
}
