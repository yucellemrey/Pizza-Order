import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

function OrderCount() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevents negative numbers
  };

  return (
    <InputGroup>
      <InputGroupText>
        <Button
          onClick={decrement}
          style={{ color: "black", backgroundColor: "#FDC913", border: "none" }}
        >
          -
        </Button>
      </InputGroupText>
      <Input value={count} style={{ textAlign: "center" }} readOnly />
      <InputGroupText>
        <Button
          onClick={increment}
          style={{ color: "black", backgroundColor: "#FDC913", border: "none" }}
        >
          +
        </Button>
      </InputGroupText>
    </InputGroup>
  );
}

export default OrderCount;
