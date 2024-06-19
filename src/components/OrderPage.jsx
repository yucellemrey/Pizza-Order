import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
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

  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppingsChosen, setToppingsChosen] = useState([]);
  const [noteWritten, setNoteWritten] = useState("");
  const [pizzaTypePrice, setPizzaTypePrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [crustPrice, setCrustPrice] = useState(0);
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const initialErrors = {
    sizeChosen: "",
    crustChosen: "",
    toppingsChosen: "",
    noteWritten: "",
    typeChosen: "",
  };

  const [errors, setErrors] = useState(initialErrors);

  const errorMessages = {
    sizeChosen: "Lütfen pizzanızın boyutunu seçin",
    crustChosen: "Lütfen pizza hamurunuzu seçin",
    toppingsChosen: "En az 4, en fazla 10 adet malzeme seçmelisiniz",
    noteWritten: "Lütfen en az 3 kelimelik bir not ekleyiniz",
    typeChosen: "Lütfen pizza çeşidinizi seçiniz",
  };

  const validateField = (field, value) => {
    let errMsg = "";
    switch (field) {
      case "sizeChosen":
        errMsg = value ? "" : errorMessages.sizeChosen;
        break;
      case "crustChosen":
        errMsg = value ? "" : errorMessages.crustChosen;
        break;
      case "toppingsChosen":
        errMsg =
          value.length >= 4 && value.length <= 10
            ? ""
            : errorMessages.toppingsChosen;
        break;
      case "noteWritten":
        errMsg = value.length >= 3 ? "" : errorMessages.noteWritten;
        break;
      case "typeChosen":
        errMsg = value ? "" : errorMessages.typeChosen;
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errMsg }));
    console.log(`Validation: ${field} = ${value}, Error: ${errMsg}`);
  };

  useEffect(() => {
    const newTotalPrice =
      (pizzaTypePrice + sizePrice + crustPrice + toppingsPrice) * count;
    setTotalPrice(newTotalPrice);
  }, [pizzaTypePrice, sizePrice, crustPrice, toppingsPrice, count]);

  useEffect(() => {
    setIsValid(
      type !== "" &&
        size !== "" &&
        crust !== "" &&
        toppingsChosen.length >= 4 &&
        toppingsChosen.length <= 10 &&
        noteWritten.length >= 3
    );
  }, [type, size, crust, toppingsChosen, noteWritten]);

  const handleTypeSelected = (selectedType, price) => {
    setType(selectedType);
    setPizzaTypePrice(price);
    validateField("typeChosen", selectedType);
  };

  const handleSizeSelected = (selectedSize, price) => {
    setSize(selectedSize);
    setSizePrice(price);
    validateField("sizeChosen", selectedSize);
  };

  const handleCrustSelected = (selectedCrust, price) => {
    setCrust(selectedCrust);
    setCrustPrice(price);
    validateField("crustChosen", selectedCrust);
  };

  const handleToppingsSelected = (selectedToppings, price) => {
    setToppingsChosen(selectedToppings);
    setToppingsPrice(price);
    validateField("toppingsChosen", selectedToppings);
  };

  const handleNoteWritten = (event) => {
    const note = event.target.value;
    setNoteWritten(note);
    validateField("noteWritten", note);
  };

  const goToOrderCompletePage = () => {
    const orderData = {
      type,
      size,
      crust,
      toppings: toppingsChosen,
      note: noteWritten,
      quantity: count,
      totalPrice,
    };
    axios
      .post("https://reqres.in/api/orders", orderData)
      .then((response) => {
        console.log("Order response:", response.data);
        navigate("/orderComplete", { state: orderData });
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div>
      <OrderPageHeader />
      <Form style={formStyle}>
        <Row>
          <Col md={4}>
            <FormGroup>
              <PizzaType onChange={handleTypeSelected} />
              {errors.typeChosen && (
                <FormFeedback style={{ display: "block", color: "red" }}>
                  {errors.typeChosen}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <PizzaSizeCheck onChange={handleSizeSelected} />
              {errors.sizeChosen && (
                <FormFeedback style={{ display: "block", color: "red" }}>
                  {errors.sizeChosen}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <PizzaCrustDrop onChange={handleCrustSelected} />
              {errors.crustChosen && (
                <FormFeedback style={{ display: "block", color: "red" }}>
                  {errors.crustChosen}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Divider orientation="horizontal" sx={{ margin: "20px 0" }} />
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <FormGroup>
              <Toppings onChange={handleToppingsSelected} />
              {errors.toppingsChosen && (
                <FormFeedback style={{ display: "block", color: "red" }}>
                  {errors.toppingsChosen}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            <FormGroup>
              <Label for="orderNotes">
                Sipariş Notu <span style={{ color: "red" }}> *</span>
              </Label>
              <Input
                type="textarea"
                name="orderNotes"
                id="orderNotes"
                placeholder="Siparişinize eklemek istediğiniz herhangi bir not var mı?"
                onChange={handleNoteWritten}
              />
              {errors.noteWritten && (
                <FormFeedback style={{ display: "block", color: "red" }}>
                  {errors.noteWritten}
                </FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ padding: "10px", marginBottom: "20px" }}>
              <Row>
                <Col md={5}>
                  <OrderCount onChange={setCount} />
                </Col>
                <Col md={7}>
                  <OrderPricing
                    totalPrice={totalPrice}
                    pizzaPrice={pizzaTypePrice + crustPrice + sizePrice}
                    toppingsPrice={toppingsPrice}
                    count={count}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="auto">
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
          </Col>
        </Row>
      </Form>
    </div>
  );
}
