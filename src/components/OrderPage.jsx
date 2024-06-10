import React from "react";
import {
  Card,
  Form,
  Col,
  Label,
  Input,
  FormGroup,
  Button,
  Row,
} from "reactstrap";
import PizzaCrustDrop from "./order-details/PizzaCrustDrop";
import Toppings from "./order-details/Toppings";
import PizzaSizeCheck from "./order-details/PizzaSizeCheck";
import OrderCount from "./order-details/OrderCount";
import OrderPricing from "./order-details/OrderPricing";
import Header from "./Header";

export default function OrderPage() {
  return (
    <div>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <PizzaSizeCheck />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <h6>Hamur Seçiminizi Yapın:</h6>
              <PizzaCrustDrop />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Toppings />
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
          <Col md={6}>
            <OrderCount />
          </Col>
          <Col md={4}>
            <Card>
              <OrderPricing />
              <Button
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
