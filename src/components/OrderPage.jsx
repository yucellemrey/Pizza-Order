import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Col,
  Label,
  Input,
  FormGroup,
  Button,
  Row,
  FormFeedback,
} from "reactstrap";
import PizzaCrustDrop from "./order-details/PizzaCrustDrop";
import Toppings from "./order-details/Toppings";
import PizzaSizeCheck from "./order-details/PizzaSizeCheck";
import OrderCount from "./order-details/OrderCount";
import OrderPricing from "./order-details/OrderPricing";
import PizzaType from "./order-details/PizzaType";
import OrderPageHeader from "./OrderPageHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OrderPage() {
  const formStyle = { padding: "4em 15em" };
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sizeChosen: "",
    crustChosen: "",
    toppingsChosen: [],
    noteWritten: "",
    typeChosen: "",
    count: 1,
    pizzaTypePrice: 0,
    sizePrice: 0,
    crustPrice: 0,
    toppingsPrice: 0,
    totalPrice: 0,
  });
  const [errors, setErrors] = useState({});

  // Calculate the total price
  useEffect(() => {
    const { pizzaTypePrice, sizePrice, crustPrice, toppingsPrice, count } =
      formData;
    const newPrice =
      (pizzaTypePrice + sizePrice + crustPrice + toppingsPrice) * count;
    setFormData((prev) => ({ ...prev, totalPrice: newPrice }));
  }, [
    formData.pizzaTypePrice,
    formData.sizePrice,
    formData.crustPrice,
    formData.toppingsPrice,
    formData.count,
  ]);

  const handleInputChange = (field, value, price = null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(price !== null && { [`${field}Price`]: price }), // Conditionally add price if provided
    }));
    validateField(field, value); // Still validating here to keep it centralized
  };

  // Validation function
  const validateField = (field, value) => {
    let errMsg = "";
    switch (field) {
      case "sizeChosen":
        errMsg = value ? "" : "Lütfen pizza için bir boyut seçiniz.";
        break;
      case "crustChosen":
        errMsg = value ? "" : "Lütfen bir hamur çeşidi seçiniz.";
        break;
      case "toppingsChosen":
        errMsg =
          value.length >= 4 && value.length <= 10
            ? ""
            : "Lütfen en az 4, en fazla 10 adet malzeme ekleyiniz.";
        break;
      case "noteWritten":
        errMsg =
          value.split(" ").length >= 3
            ? ""
            : "Sipariş notunuz en az 3 karakter içermelidir.";
        break;
      case "typeChosen":
        errMsg = value ? "" : "Lütfen pizza çeşidinizi seçiniz.";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errMsg }));
  };

  // Check if form is valid
  useEffect(() => {
    const isValid = Object.values(errors).every((errMsg) => errMsg === "");
    if (isValid !== formData.isValid) {
      setFormData((prev) => ({ ...prev, isValid }));
    }
  }, [errors]);

  const goToOrderCompletePage = () => {
    if (formData.totalPrice > 0 && formData.isValid) {
      axios
        .post("https://reqres.in/api/pizza", formData)
        .then((response) => {
          console.log("Order response:", response.data);
          navigate("/orderComplete");
        })
        .catch((error) => {
          console.error("Error submitting order:", error);
        });
    } else {
      console.error("Form is not valid:", errors);
    }
  };

  const handlePizzaTypeChange = (type, price) => {
    // Any specific logic related to pizza type can go here
    handleInputChange("typeChosen", type, price);
  };

  const handleToppingsChange = (toppings) => {
    // Convert toppings from boolean array to list of topping names if needed
    const selectedToppingNames = toppings
      .map((isSelected, index) =>
        isSelected ? toppingIngredients[index] : null
      )
      .filter((name) => name !== null);

    handleInputChange("toppingsChosen", selectedToppingNames);
  };

  const handleCountChange = (newCount) => {
    // Directly using handleInputChange to update the count
    handleInputChange("count", newCount);
  };

  return (
    <div>
      <OrderPageHeader />
      <Form style={formStyle}>
        <FormGroup>
          <PizzaType onChange={handlePizzaTypeChange} />
          {errors.typeChosen && (
            <FormFeedback>{errors.typeChosen}</FormFeedback>
          )}
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <PizzaSizeCheck
                onChange={(size, price) =>
                  handleInputChange("sizeChosen", size, price)
                }
              />
              {errors.sizeChosen && (
                <FormFeedback>{errors.sizeChosen}</FormFeedback>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <PizzaCrustDrop
                onChange={(type, price) =>
                  handleInputChange("crustChosen", type, price)
                }
              />
              {errors.crustChosen && (
                <FormFeedback>{errors.crustChosen}</FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Toppings onChange={handleToppingsChange} />
          {errors.toppingsChosen && (
            <FormFeedback>{errors.toppingsChosen}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="orderNotes"
            id="orderNotes"
            placeholder="Lütfen sipariş notunuzu giriniz"
            onChange={(e) => handleInputChange("noteWritten", e.target.value)}
          />
          {errors.noteWritten && (
            <FormFeedback>{errors.noteWritten}</FormFeedback>
          )}
        </FormGroup>
        <OrderCount onChange={handleCountChange} />
        <OrderPricing
          totalPrice={formData.totalPrice}
          pizzaPrice={formData.pizzaTypePrice}
          toppingsPrice={formData.toppingsPrice}
          count={formData.count}
        />
        <Button
          onClick={goToOrderCompletePage}
          disabled={!formData.isValid}
          style={{ color: "black", backgroundColor: "#FDC913", border: "none" }}
        >
          Place Order
        </Button>
      </Form>
    </div>
  );
}
