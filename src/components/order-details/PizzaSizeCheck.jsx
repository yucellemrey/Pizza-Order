import { FormGroup, Input, Label, Col } from "reactstrap";

export default function PizzaSizeCheck() {
  return (
    <div>
      <FormGroup>
        <legend className="col-form-label col-sm-2">Boyut Seçimi</legend>
        <Col sm={10}>
          <FormGroup check>
            <Input name="radio2" type="radio" /> <Label check>Küçük Boy</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio2" type="radio" /> <Label check>Orta Boy</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio2" type="radio" /> <Label check>Küçük Boy</Label>
          </FormGroup>
        </Col>
      </FormGroup>
    </div>
  );
}
