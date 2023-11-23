import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardPizza() {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
        <Card.Body className="card-pizza">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;
