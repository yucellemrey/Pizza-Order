import React from "react";
import { useState, useEffect } from "react";
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

export default function OrderPage() {
  const formStyle = {
    padding: "4em 15em ",
  };

  const navigate = useNavigate();

  const goToOrderCompletePage = () => {
    navigate("/orderComplete"); // Path to your OrderPage
  };

  const initial = {
    sizeChosen: false,
    crustChosen: false,
    toppingsChosen: false,
    noteWritten: false,
    typeChosen: false,
  };

  const errorMessages = {
    sizeChosen: "Lütfen pizzanızın boyutunu seçin",
    crustChosen: "Lütfen pizza hamurunuzu seçin",
    toppingsChosen: "En az 4, en fazla 10 adet malzeme seçmelisiniz",
    noteWritten: "Lütfen en az 3 kelimelik bir not ekleyiniz",
    typeChosen: "Lütfen pizza çeşidini seçiniz",
  };

  const [pizzaTypePrice, setPizzaTypePrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [crustPrice, setCrustPrice] = useState(0);
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState(initial);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newPrice =
      (pizzaTypePrice + sizePrice + crustPrice + toppingsPrice) * count;
    setTotalPrice(newPrice);
  }, [pizzaTypePrice, sizePrice, crustPrice, toppingsPrice, count]);

  const handleSizeSelected = (selected) => {
    console.log("Size selected:", selected);
    setErrors((prev) => ({ ...prev, sizeChosen: selected }));
  };

  const handleCrustSelected = (selected) => {
    console.log("Crust selected:", selected);
    setErrors((prev) => ({ ...prev, crustChosen: selected }));
  };

  const handleTypeSelected = (selected) => {
    console.log("Type selected:", selected);
    setErrors((prev) => ({ ...prev, typeChosen: selected }));
  };

  const handleToppingsSelected = (toppingsCount) => {
    console.log("Toppings count:", toppingsCount);
    // Assume that valid selection is between 4 and 10 toppings
    const isValid = toppingsCount >= 4 && toppingsCount <= 10;
    setErrors((prev) => ({ ...prev, toppingsChosen: isValid }));
  };

  const handleNoteWritten = (event) => {
    const note = event.target.value;
    const isValid = note.length >= 3;
    setErrors((prev) => ({ ...prev, noteWritten: isValid }));
  };

  useEffect(() => {
    console.log("Current errors state:", errors);
    const { sizeChosen, crustChosen, toppingsChosen, noteWritten, typeChosen } =
      errors;
    setIsValid(
      sizeChosen && crustChosen && toppingsChosen && noteWritten && typeChosen
    );
  }, [errors]);

  return (
    <div>
      <OrderPageHeader />
      <Form style={formStyle}>
        <FormGroup>
          <h6>Pizza Seçiminizi Yapın:</h6>
          <PizzaType
            pizzaTypeSelected={handleTypeSelected}
            setPizzaTypePrice={setPizzaTypePrice}
          />
          {!errors.typeChosen && (
            <FormFeedback style={{ display: "block" }}>
              {errorMessages.typeChosen}
            </FormFeedback>
          )}
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <PizzaSizeCheck
                setSizePrice={setSizePrice}
                sizeSelected={handleSizeSelected}
              />
              {!errors.sizeChosen && (
                <FormFeedback style={{ display: "block" }}>
                  {errorMessages.sizeChosen}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <h6>Hamur Seçiminizi Yapın:</h6>
              <PizzaCrustDrop
                setCrustPrice={setCrustPrice}
                crustSelected={handleCrustSelected}
              />
              {!errors.crustChosen && (
                <FormFeedback style={{ display: "block" }}>
                  {errorMessages.crustChosen}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Toppings
            setToppingsPrice={setToppingsPrice}
            toppingsSelected={handleToppingsSelected}
          />
          {!errors.toppingsChosen && (
            <FormFeedback style={{ display: "block" }}>
              {errorMessages.toppingsChosen}
            </FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="orderNotes">Sipariş Notu</Label>
          <Input
            type="textarea"
            name="orderNotes"
            id="orderNotes"
            placeholder="Siparişinize eklemek istediğiniz herhangi bir not var mı?"
            onChange={handleNoteWritten}
          />
          {!errors.noteWritten && (
            <FormFeedback style={{ display: "block" }}>
              {errorMessages.noteWritten}
            </FormFeedback>
          )}
        </FormGroup>
        <Row>
          <Col md={4}>
            <OrderCount onChange={setCount} />
          </Col>
          <Col md={8}>
            <Card>
              <OrderPricing
                pizzaPrice={sizePrice + crustPrice + pizzaTypePrice}
                toppingsPrice={toppingsPrice}
                totalPrice={totalPrice}
                count={count}
              />
              <Button
                onClick={goToOrderCompletePage}
                disabled={!isValid}
                style={{
                  color: "black",
                  backgroundColor: "#FDC913",
                  border: "none",
                }}
              >
                Sipariş Ver
              </Button>
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
