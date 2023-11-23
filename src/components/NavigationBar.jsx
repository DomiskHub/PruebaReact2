import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">🍕 Pizzeria Mamma Mia! </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
