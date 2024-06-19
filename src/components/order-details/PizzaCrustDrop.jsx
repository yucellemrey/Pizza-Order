import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaCrustDrop({
  onChange,
  direction,
  ...args
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [crust, setCrust] = useState("-- Hamur Çeşitleri --");

  const toggle = () => setDropdownOpen(prev => !prev);

  const crustPrices = {
    "İnce Hamur": 0,
    "Normal Hamur": 10,
    "Kalın Hamur": 15,
    "Peynir Kenar (İnce)": 25,
    "Peynir Kenar (Normal)": 30
  };

  function handleChange(newValue) {
    setCrust(newValue);
    // Call the onChange function from the parent component with the crust type and price
    onChange(newValue, crustPrices[newValue]);
  }

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} {...args}>
        <DropdownToggle caret>{crust}</DropdownToggle>
        <DropdownMenu>
          {Object.entries(crustPrices).map(([type, price]) => (
            <DropdownItem key={type} onClick={() => handleChange(type)}>
              {type} - {price}TL
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaCrustDrop.propTypes = {
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.string,
};
