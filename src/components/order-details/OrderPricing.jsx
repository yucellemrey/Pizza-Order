import { Table } from "reactstrap";

export default function OrderPricing({
  pizzaPrice,
  toppingsPrice,
  totalPrice,
  count,
}) {
  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Pizza</th>
          <td></td>
          <td>
            {count > 1 ? `${count} x ` : ""} {pizzaPrice} TL
          </td>
        </tr>
        <tr>
          <th scope="row">Eklenen Malzemeler</th>
          <td></td>
          <td>
            {count > 1 ? `${count} x ` : ""} {toppingsPrice} TL{" "}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Toplam</th>
          <th></th>
          <th>{totalPrice} TL</th>
        </tr>
      </tfoot>
    </Table>
  );
}
