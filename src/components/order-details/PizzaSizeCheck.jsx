import { useState } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";

const pizzaSizeCheckStyleHeader = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  fontSize: "22px",
  fontWeight: "bold",
};

export default function PizzaSizeCheck({ onChange }) {
  const [selectedSize, setSelectedSize] = useState("");

  const sizePrices = {
    small: 0,
    medium: 30,
    large: 50,
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    // Invoke the onChange function from the parent component with the size and price
    onChange(size, sizePrices[size]);
  };

  return (
    <div>
      <FormGroup>
        <legend style={pizzaSizeCheckStyleHeader}>Boyut Seçimi</legend>
        <Col sm={10}>
          {["small", "medium", "large"].map((size) => (
            <FormGroup check key={size}>
              <Label check>
                <Input
                  name="radioSize"
                  type="radio"
                  onChange={() => handleSizeChange(size)}
                  checked={selectedSize === size}
                />
                {size === "small"
                  ? "Küçük Boy"
                  : size === "medium"
                  ? "Orta Boy"
                  : "Büyük Boy"}
              </Label>
            </FormGroup>
          ))}
        </Col>
      </FormGroup>
    </div>
  );
}
