import { useState } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";

const pizzaSizeCheckStyleHeader = {
  display: "flex",
  justifyContent: "flexStart",
  alignItems: "flexStart",
  fontSize: "22px",
  fontWeight: "bold",
};

export default function PizzaSizeCheck({ setSizePrice, sizeSelected }) {
  const [selectedSize, setSelectedSize] = useState("");

  const sizePrices = {
    small: 0,
    medium: 30,
    large: 50,
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSizePrice(sizePrices[size]);
    sizeSelected(size ? size : false);
  };

  return (
    <div>
      <FormGroup>
        <legend style={pizzaSizeCheckStyleHeader}>Boyut Seçimi</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input
                name="radioSize"
                type="radio"
                onChange={() => handleSizeChange("small")}
                checked={selectedSize === "small"}
              />
              Küçük Boy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                name="radioSize"
                type="radio"
                onChange={() => handleSizeChange("medium")}
                checked={selectedSize === "medium"}
              />
              Orta Boy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                name="radioSize"
                type="radio"
                onChange={() => handleSizeChange("large")}
                checked={selectedSize === "large"}
              />
              Büyük Boy
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
    </div>
  );
}
