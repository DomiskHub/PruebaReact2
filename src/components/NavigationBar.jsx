import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">🍕 Pizzeria Mamma Mia! </Navbar.Brand>
          <div className="pizza-link">
            <NavLink className={({ isActive }) => (isActive ? "pizza-nav" : undefined)} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "pizza-nav" : undefined)} to="/carrito">
              Mi Carrito 🛒
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
