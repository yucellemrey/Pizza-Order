import { Nav, NavLink, NavItem } from "reactstrap";

export default function Header() {
  const headerStyle = {
    backgroundColor: "#CE2829",
    color: "white",
    paddingLeft: 0, // Remove padding if any
    paddingRight: 0, // Remove padding if any
    margin: 0, // Ensure it sticks to the edge
    width: "100%",
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
