import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CardPizza() {
  const { pizzas, addToCart } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleInfo = (id) => {
    navigate(`/pizza/${id}`);
  };

  const handleAddToCart = (selectedPizza) => {
    if (selectedPizza) {
      addToCart(selectedPizza);
      alert("Pizza agregada con exito");
    }
  };

  return (
    <>
      {pizzas.map((pizza) => (
        <Card key={pizza.id}>
          <Card.Img className="pizza-pic" variant="top" src={pizza.img} />
          <Card.Body className="card-pizza">
            <Card.Title className="pizza-name">
              <strong>{pizza.name}</strong>
            </Card.Title>
            <ListGroup className="pizza-ingredients">
              {pizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>🍕{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
            <div>
              <Button className="pizza-button" variant="info" onClick={() => handleAddToCart(pizza)}>
                Agregar por ${pizza.price}
              </Button>
              <Button className="pizza-button" variant="danger" onClick={() => handleInfo(pizza.id)}>
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
