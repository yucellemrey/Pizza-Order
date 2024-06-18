import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaCrustDrop({
  crustSelected,
  setCrustPrice,
  direction,
  ...args
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamur, setHamur] = useState("-- Hamur Çeşitleri --");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleChange(newValue) {
    setHamur(newValue);
    crustSelected(newValue); // Invoke the callback with the new value
    // Set crust price based on selection
    switch (newValue) {
      case "İnce Hamur":
        setCrustPrice(0);
        break;
      case "Normal Hamur":
        setCrustPrice(10);
        break;
      case "Kalın Hamur":
        setCrustPrice(15);
        break;
      case "Peynir Kenar (İnce)":
        setCrustPrice(25);
        break;
      case "Peynir Kenar (Normal)":
        setCrustPrice(30);
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
        <DropdownToggle caret>{hamur}</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem onClick={() => handleChange("İnce Hamur")}>
            İnce Hamur
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Normal Hamur")}>
            Normal Hamur - 10TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Kalın Hamur")}>
            Kalın Hamur - 15TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Peynir Kenar (İnce)")}>
            Peynir Kenar (İnce) - 25TL
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Peynir Kenar (Normal)")}>
            Peynir Kenar (Normal) - 30TL
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaCrustDrop.propTypes = {
  direction: PropTypes.string,
};
