import { useState } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";

export default function PizzaSizeCheck({ onChange }) {
  const [selectedSize, setSelectedSize] = useState("");

  const sizePrices = {
    small: 0,
    medium: 30,
    large: 50,
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    onChange(size, sizePrices[size]);
  };

  return (
    <div>
      <FormGroup>
        <legend>
          Boyut Seçimi
          <span style={{ color: "red" }}> *</span>
        </legend>
        <Col sm={10}>
          <FormGroup check data-cy="pizzaSize">
            <Label check>
              <Input
                name="radioSize"
                type="radio"
                onChange={() => handleSizeChange("small")}
                checked={selectedSize === "small"}
                data-cy="radioSizeSmall"
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
                data-cy="radioSizeMedium"
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
                data-cy="radioSizeLarge"
              />
              Büyük Boy
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
    </div>
  );
}
