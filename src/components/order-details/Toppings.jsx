import { FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

export default function Toppings({ onChange }) {
  const toppingIngredients = [
    "Pepperoni",
    "Sosis",
    "Jambon",
    "Zeytin",
    "Domates",
    "Patlıcan",
    "Ananas",
    "Soğan",
    "Jalapeno",
    "Mısır",
    "Ricotta",
    "Biber",
  ];
  const toppingPrices = new Array(toppingIngredients.length).fill(5);

  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingChange = (ingredient) => {
    const updatedToppings = selectedToppings.includes(ingredient)
      ? selectedToppings.filter((item) => item !== ingredient)
      : [...selectedToppings, ingredient];

    setSelectedToppings(updatedToppings);

    const total = updatedToppings.length * 5;
    onChange(updatedToppings, total);
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "100%",
  };

  const itemStyle = {
    width: "25%",
    marginBottom: "10px",
    paddingBottom: "10px",
    paddingRight: "10px",
  };

  return (
    <div style={containerStyle}>
      <legend style={{ paddingBottom: "15px" }}>
        Ekstra Malzemeler:
        <span style={{ color: "red" }}> *</span>
      </legend>
      {toppingIngredients.map((ing, index) => (
        <FormGroup check key={index} style={itemStyle}>
          <Label check>
            <Input
              data-cy={`topping-${index}`}
              type="checkbox"
              checked={selectedToppings.includes(ing)}
              onChange={() => handleToppingChange(ing)}
            />{" "}
            {ing}
          </Label>
        </FormGroup>
      ))}
    </div>
  );
}
