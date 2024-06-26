import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./MainPage.css"; 

export default function MainPage() {
  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate("/order"); 
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
