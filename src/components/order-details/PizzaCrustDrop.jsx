import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaCrustDrop({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hamur, setHamur] = useState("Hamur Seçimi");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleChange(newValue) {
    setHamur(newValue);
  }

  return (
    <div className="d-flex p-5">
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
            Normal Hamur
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Kalın Hamur")}>
            Kalın Hamur
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Peynir Kenar (İnce)")}>
            Peynir Kenar (İnce)
          </DropdownItem>
          <DropdownItem onClick={() => handleChange("Peynir Kenar (Normal)")}>
            Peynir Kenar (Normal)
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaCrustDrop.propTypes = {
  direction: PropTypes.string,
};
