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

export default function OrderPage() {
  const formStyle = {
    padding: "4em 15em ",
  };

  const initial = {
    sizeChosen: false,
    crustChosen: false,
    toppingsChosen: false,
    noteWritten: false,
  };

  const errorMessages = {
    sizeChosen: "Lütfen pizzanızın boyutunu seçin",
    crustChosen: "Lütfen pizza hamurunuzu seçin",
    toppingsChosen: "En az 4, en fazla 10 adet malzeme seçmelisiniz",
    noteWritten: "Lütfen en az 4 kelimelik bir not ekleyiniz",
  };

  const [sizePrice, setSizePrice] = useState(0);
  const [crustPrice, setCrustPrice] = useState(0);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState(initial);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newPrice = (sizePrice + crustPrice + toppingsPrice) * count;
    setTotalPrice(newPrice);
  }, [sizePrice, crustPrice, toppingsPrice, count]);

  const handleSizeSelected = (selected) => {
    console.log("Size selected:", selected);
    setErrors((prev) => ({ ...prev, sizeChosen: selected }));
  };

  useEffect(() => {
    console.log("Current errors state:", errors);
    const { sizeChosen, crustChosen, toppingsChosen, noteWritten } = errors;
    setIsValid(sizeChosen && crustChosen && toppingsChosen && noteWritten);
  }, [errors]);

  return (
    <div>
      <Form style={formStyle}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <PizzaSizeCheck
                setSizePrice={setSizePrice}
                sizeSelected={handleSizeSelected}
              />
              {!errors.sizeChosen && (
                <div style={{ color: "red", paddingLeft: "8px" }}>
                  {errorMessages.sizeChosen}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <h6>Hamur Seçiminizi Yapın:</h6>
              <PizzaCrustDrop
                crustPrice={crustPrice}
                setCrustPrice={setCrustPrice}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Toppings
            setToppingsPrice={setToppingsPrice}
            toppingsPrice={toppingsPrice}
          />
        </FormGroup>
        <FormGroup>
          <Label for="orderNotes">Sipariş Notu</Label>
          <Input
            name="orderNotes"
            id="orderNotes"
            placeholder="Siparişinize eklemek istediğiniz herhangi bir not var mı?"
          />
        </FormGroup>
        <Row>
          <Col md={4}>
            <OrderCount onChange={setCount} />
          </Col>
          <Col md={8}>
            <Card>
              <OrderPricing
                pizzaPrice={sizePrice + crustPrice}
                toppingsPrice={toppingsPrice}
                totalPrice={totalPrice}
                count={count}
              />
              <Button
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
