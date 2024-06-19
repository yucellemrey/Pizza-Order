import { FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

export default function Toppings({ onChange }) {
  // Toppings list is assumed to be predefined
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

  const [selectedToppings, setSelectedToppings] = useState(
    new Array(toppingIngredients.length).fill(false)
  );

  const handleToppingChange = (index) => {
    const updatedToppings = selectedToppings.map((item, idx) =>
      idx === index ? !item : item
    );
    setSelectedToppings(updatedToppings);

    // Create an array of selected toppings based on true/false values
    const selectedToppingNames = updatedToppings.reduce(
      (acc, isSelected, idx) => {
        if (isSelected) acc.push(toppingIngredients[idx]);
        return acc;
      },
      []
    );

    // Pass the selected toppings names to the parent component
    onChange(selectedToppingNames);
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
