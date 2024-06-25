import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaCrustDrop({ onChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [crust, setCrust] = useState("-- Hamur Çeşitleri --");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleChange(newValue) {
    setCrust(newValue);
    let price = 0;
    switch (newValue) {
      case "İnce Hamur":
        price = 0;
        break;
      case "Normal Hamur":
        price = 10;
        break;
      case "Kalın Hamur":
        price = 15;
        break;
      case "Peynir Kenar (İnce)":
        price = 25;
        break;
      case "Peynir Kenar (Normal)":
        price = 30;
        break;
      default:
        break;
    }
    onChange(newValue, price); // Call the onChange prop with the selected value and price
  }

  return (
    <div>
      <legend>
        Hamur Çeşidi:
        <span style={{ color: "red" }}> *</span>
      </legend>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} data-cy="pizzaCrustDrop">
        <DropdownToggle caret>{crust}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => handleChange("İnce Hamur")}
            data-cy={`pizzaCrust${1}`}
          >
            İnce Hamur
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Normal Hamur")}
            data-cy={`pizzaCrust${2}`}
          >
            Normal Hamur - 10TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Kalın Hamur")}
            data-cy={`pizzaCrust${3}`}
          >
            Kalın Hamur - 15TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Peynir Kenar (İnce)")}
            data-cy={`pizzaCrust${4}`}
          >
            Peynir Kenar (İnce) - 25TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Peynir Kenar (Normal)")}
            data-cy={`pizzaCrust${5}`}
          >
            Peynir Kenar (Normal) - 30TL
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaCrustDrop.propTypes = {
  onChange: PropTypes.func.isRequired,
};
