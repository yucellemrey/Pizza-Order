import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function OrderPageHeader() {
  const headerStyle = {
    backgroundColor: "#CE2829",
    color: "white",
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    width: "100%",
    fontFamily: "Roboto Condensed",
  };

  const navStyle = {
    textDecoration: "none",
    color: "white",
  };

  const navContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1em",
  };

  return (
    <div style={headerStyle}>
      <h2 style={navContainer}>Teknolojik Yemekler</h2>
      <Nav style={navContainer}>
        <NavItem>
          <NavLink to="/" style={navStyle} active href="Anasayfa">
            Anasayfa
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/order" style={navStyle} href="Sipariş Ver">
            Sipariş Oluştur
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
