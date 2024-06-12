import { Nav, NavLink, NavItem } from "reactstrap";

export default function Header() {
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
  };

  return (
    <div style={headerStyle}>
      <h2 style={navContainer}>Teknolojik Yemekler</h2>
      <Nav style={navContainer}>
        <NavItem>
          <NavLink style={navStyle} active href="#">
            Anasayfa
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={navStyle} href="#">
            Sipariş Oluştur
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
