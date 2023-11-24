import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function CardPizza() {
  const { pizzas } = useContext(GlobalContext);
  return (
    <>
      {pizzas.map((pizza) => (
        <Card key={pizza.id}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body className="card-pizza">
            <Card.Title className="pizza-name">
              <strong>{pizza.name}</strong>
            </Card.Title>
            <Card.Text className="pizza-ingredients">
              <ListGroup>
                {pizza.ingredients.map((ingredient, index) => (
                  <ListGroup.Item key={index}>🍕{ingredient}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Text>
            <div>
              <Button className="pizza-button" variant="info">
                Agregar por ${pizza.price}
              </Button>
              <Button className="pizza-button" variant="danger">
                Mas info 👀
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardPizza;
