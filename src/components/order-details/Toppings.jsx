import { FormGroup, Input, Label } from "reactstrap";

export default function Toppings() {
  const toppingIng = [
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

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "100%",
  };

  const itemStyle = {
    width: "25%", // Four columns
    marginBottom: "10px",
    paddingBottom: "10px", // Space between rows
    paddingRight: "10px", //// Adjust spacing between items
  };

  return (
    <div style={containerStyle}>
      {toppingIng.map((ing, index) => (
        <FormGroup check key={index} style={itemStyle}>
          <Label check>
            <Input type="checkbox" /> {ing}
          </Label>
        </FormGroup>
      ))}
    </div>
  );
}
