import { Table } from "reactstrap";

export default function OrderPricing() {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Sipariş Toplamı</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Pizza</th>

          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">Eklenen Malzemeler</th>

          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}
