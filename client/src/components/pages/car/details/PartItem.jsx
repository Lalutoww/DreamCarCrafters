import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function PartItem({ name, manufacturer, description, imageUrl }) {
   return (
            <Col className="d-flex">
               <Card className="bg-dark text-white">
                  <Card.Img variant="top" src={imageUrl} />
                  <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     <Card.Title>{manufacturer}</Card.Title>
                     <Card.Text>{description}</Card.Text>
                  </Card.Body>
               </Card>
            </Col>
   );
}

export default PartItem;
