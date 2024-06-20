import { useLocation } from "react-router-dom";
import "./OrderComplete.css";
import { Card } from "reactstrap";

export default function OrderComplete() {
  const location = useLocation();
  const { state } = location;
  const { type, size, crust, toppings, note, quantity, totalPrice } =
    state || {};

  return (
    <div className="order-complete">
      <h2>Teknolojik Yemekler</h2>
      <h1>Tebrikler!</h1>
      <h1>Siparişiniz Alındı!</h1>
      <Card className="order-complete-card">
        <p>
          <strong>Pizza Türü:</strong> {type}
        </p>
        <p>
          <strong>Boyut:</strong> {size}
        </p>
        <p>
          <strong>Hamur Seçimi:</strong> {crust}
        </p>
        <p>
          <strong>Ek Malzemeler:</strong> {toppings && toppings.join(", ")}
        </p>
        <p>
          <strong>Sipariş Notu:</strong> {note}
        </p>
        <p>
          <strong>Adet:</strong> {quantity}
        </p>
        <p>
          <strong>Sipariş Toplamı:</strong> {totalPrice} TL
        </p>
      </Card>
    </div>
  );
}
