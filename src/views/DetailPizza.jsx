import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

function DetailPizza() {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(GlobalContext);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    const pizza = pizzas.find((pizza) => pizza.id === id);
    if (pizza) {
      setSelectedPizza(pizza);
    }
  }, [id, pizzas]);

  const handleAddToCart = () => {
    if (selectedPizza) {
      addToCart(selectedPizza);
      alert("Pizza agregada con exito");
    }
  };

  if (!selectedPizza) {
    return null;
  }

  return (
    <div className="detail-card">
      <Card>
        <Card.Img className="pizza-pic-detail" variant="top" src={selectedPizza.img} />
        <Card.Body className="card-pizza">
          <Card.Title className="pizza-name">
            <strong>{selectedPizza.name}</strong>
          </Card.Title>
          <Card.Text className="pizza-ingredients">
            <Card.Text>
              {selectedPizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>🍕{ingredient}</ListGroup.Item>
              ))}
            </Card.Text>
            <Card.Text className="pizza-desc">{selectedPizza.desc}</Card.Text>
          </Card.Text>
          <div>
            <Button className="pizza-button" variant="info" onClick={handleAddToCart}>
              Agregar al carrito por: ${selectedPizza.price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailPizza;
