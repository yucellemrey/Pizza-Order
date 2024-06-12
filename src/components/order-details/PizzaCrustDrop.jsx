import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaCrustDrop({ setCrustPrice, direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamur, setHamur] = useState("Hamur Seçimi");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleChange(newValue) {
    setHamur(newValue);
    if (newValue === "İnce Hamur") {
      setCrustPrice(0);
    } else if (newValue === "Normal Hamur") {
      setCrustPrice(10);
    } else if (newValue === "Kalın Hamur") {
      setCrustPrice(15);
    } else if (newValue === "Peynir Kenar (İnce)") {
      setCrustPrice(25);
    } else if (newValue === "Peynir Kenar (Normal)") {
      setCrustPrice(30);
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
