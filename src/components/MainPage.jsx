import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./MainPage.css"; // Assuming you will use a separate CSS file for styles

export default function MainPage() {
  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate("/order"); // Path to your OrderPage
  };

  return (
    <div className="main-page">
      <h1>Teknolojik Yemekler</h1>
      <h2>KOD ACIKTIRIR, PİZZA DOYURUR</h2>
      <Button className="order-button" onClick={goToOrderPage}>
        ACIKTIM
      </Button>
    </div>
  );
}
