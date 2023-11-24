import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function CardPizza() {
  const { pizzas } = useContext(GlobalContext);
  return (
    <div className="card-container">
      {pizzas.map((pizza) => (
        <div>
          <Card key={pizza.id} className="card-item">
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body className="card-pizza">
              <Card.Title className="pizza-name">
                <strong>🍕{pizza.name}🍕</strong>
              </Card.Title>
              <Card.Text className="pizza-ingredients">
                <strong>Ingredients:</strong>
                <br />
                {pizza.ingredients.join(", ")}
              </Card.Text>
              <Button className="pizza-button" variant="info">
                Agregar por ${pizza.price}
              </Button>
              <Button className="pizza-button" variant="danger">
                Mas info
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardPizza;
