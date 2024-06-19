import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaType({
  onChange, // This prop will handle both pizza type and price in the parent component
  direction,
  ...args
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pizzaType, setPizzaType] = useState("-- Pizza Çeşitleri --");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const prices = {
    "Margharita Pizza": 130,
    "4 Peynirli Pizza": 160,
    "Tavuk & BBQ Pizza": 170,
    "Akdeniz Pizza": 150,
    "Vegan Pizza": 110,
  };

  function handleChange(newValue) {
    setPizzaType(newValue); // Update local state with the new pizza type
    onChange(newValue, prices[newValue] || 0); // Send both type and price to parent
  }

  return (
    <div>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        direction={direction}
        {...args}
      >
        <DropdownToggle caret>{pizzaType}</DropdownToggle>
        <DropdownMenu>
          {Object.entries(prices).map(([type, price]) => (
            <DropdownItem key={type} onClick={() => handleChange(type)}>
              {`${type} - ${price}TL`}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaType.propTypes = {
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.string,
};
