import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaType({
  pizzaTypeSelected,
  setPizzaTypePrice,
  direction,
  ...args
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pizzaType, setPizzaType] = useState("-- Pizza Çeşitleri --");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleChange(newValue) {
    setPizzaType(newValue);
    pizzaTypeSelected(newValue); // Invoke the callback with the new value
    // Set type price based on selection
    switch (newValue) {
      case "Margharita Pizza":
        setPizzaTypePrice(130);
        break;
      case "4 Peynirli Pizza":
        setPizzaTypePrice(160);
        break;
      case "Tavuk & BBQ Pizza":
        setPizzaTypePrice(170);
        break;
      case "Akdeniz Pizza":
        setPizzaTypePrice(150);
        break;
      case "Vegan Pizza":
        setPizzaTypePrice(110);
        break;
      default:
        // Handle default case if necessary
        break;
    }
  }
  return (
    <div>
      <Dropdown
        onChange={handleChange}
        isOpen={dropdownOpen}
        toggle={toggle}
        direction={direction}
      >
        <DropdownToggle caret>{pizzaType}</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem onClick={() => handleChange("Margharita Pizza")}>
            Margharita Pizza - 130TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("4 Peynirli Pizza")}>
            4 Peynirli Pizza - 160TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Tavuk & BBQ Pizza")}>
            Tavuk & BBQ Pizza - 160TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Akdeniz Pizza")}>
            Akdeniz Pizza - 150TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Vegan Pizza")}>
            Vegan Pizza - 110TL
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaType.propTypes = {
  direction: PropTypes.string,
};
