import { FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

export default function Toppings({ setToppingsPrice, toppingsSelected }) {
  // Toppings list and prices are assumed to be predefined
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

  const [selectedToppings, setSelectedToppings] = useState(
    new Array(toppingIngredients.length).fill(false)
  );

  const handleToppingChange = (index) => {
    const updatedToppings = selectedToppings.map((item, idx) =>
      idx === index ? !item : item
    );
    setSelectedToppings(updatedToppings);

    const total = updatedToppings.reduce((acc, isSelected, idx) => {
      return isSelected ? acc + toppingPrices[idx] : acc;
    }, 0);

    setToppingsPrice(total);
    // Call the passed callback with the count of selected toppings
    const countSelected = updatedToppings.filter(Boolean).length;
    toppingsSelected(countSelected);
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
      {toppingIngredients.map((ing, index) => (
        <FormGroup check key={index} style={itemStyle}>
          <Label check>
            <Input
              type="checkbox"
              checked={selectedToppings[index]}
              onChange={() => handleToppingChange(index)}
            />{" "}
            {ing}
          </Label>
        </FormGroup>
      ))}
    </div>
  );
}
