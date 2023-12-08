import { Link } from 'react-router-dom';
import styles from './MyGarage.module.css'

const MyCarElement = ({ manufacturer, model, imageUrl, ownerName, _id }) => {
   return (
      <Link
      to={`/cars/details/${_id}`}
      className={styles['car']}
   >
         <img className={styles['car-img']} src={imageUrl} alt={`${manufacturer} ${model}`} />
         <h3>
            {manufacturer} {model}
         </h3>
         <p>Owner: {ownerName}</p>
      </Link>
   );
};

export default MyCarElement;
