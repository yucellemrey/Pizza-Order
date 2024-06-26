import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

export default function PizzaType({ onChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pizzaType, setPizzaType] = useState("-- Pizza Çeşitleri --");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleChange(newValue) {
    setPizzaType(newValue);
    let price = 0;
    switch (newValue) {
      case "Margharita Pizza":
        price = 130;
        break;
      case "4 Peynirli Pizza":
        price = 160;
        break;
      case "Tavuk & BBQ Pizza":
        price = 170;
        break;
      case "Akdeniz Pizza":
        price = 150;
        break;
      case "Vegan Pizza":
        price = 110;
        break;
      default:
        break;
    }
    onChange(newValue, price);
  }

  return (
    <div>
      <legend>
        Pizza Çeşidi:
        <span style={{ color: "red" }}> *</span>
      </legend>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} data-cy="pizzaTypeDrop">
        <DropdownToggle caret>{pizzaType}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => handleChange("Margharita Pizza")}
            data-cy={`pizzaType${1}`}
          >
            Margharita Pizza - 130TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("4 Peynirli Pizza")}
            data-cy={`pizzaType${2}`}
          >
            4 Peynirli Pizza - 160TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Tavuk & BBQ Pizza")}
            data-cy={`pizzaType${3}`}
          >
            Tavuk & BBQ Pizza - 170TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Akdeniz Pizza")}
            data-cy={`pizzaType${4}`}
          >
            Akdeniz Pizza - 150TL
          </DropdownItem>
          <DropdownItem
            onClick={() => handleChange("Vegan Pizza")}
            data-cy={`pizzaType${5}`}
          >
            Vegan Pizza - 110TL
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

PizzaType.propTypes = {
  onChange: PropTypes.func.isRequired,
};
