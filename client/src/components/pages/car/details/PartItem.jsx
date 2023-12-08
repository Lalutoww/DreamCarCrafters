import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function PartItem({ name, manufacturer, description, imageUrl }) {
   return (
            <Col className="d-flex">
               <Card className="bg-dark text-white">
                  <Card.Img variant="top" src={imageUrl} />
                  <Card.Body>
                     <Card.Title style={{textAlign: 'center'}}>{manufacturer}</Card.Title>
                     <Card.Text style={{fontSize: '12px', fontStyle: 'italic', textAlign: 'center'}}>{name}</Card.Text>
                     <Card.Text>{description}</Card.Text>
                  </Card.Body>
               </Card>
            </Col>
   );
}

export default PartItem;
