import Button from 'react-bootstrap/Button';
import styles from './Details.module.css';
import Card from 'react-bootstrap/Card';

function PartItem({
   name,
   manufacturer,
   description,
   imageUrl
}) {
   return (
      <Card className={styles['parts']}>
         <Card.Img
            className={styles['parts-img']}
            variant="top"
            src={imageUrl}
         />
         <Card.Body className={styles['parts-body']}>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{manufacturer}</Card.Title>
            <Card.Text>
               {description}
            </Card.Text>
         </Card.Body>
      </Card>
   );
}

export default PartItem;
