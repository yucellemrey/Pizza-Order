import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

function OrderCount({ onChange }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  return (
    <InputGroup>
      <InputGroupText>
        <Button
          onClick={decrement}
          style={{ color: "black", backgroundColor: "#FDC913", border: "none" }}
          disabled={count === 1}
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
