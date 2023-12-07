import styles from './BrowseCars.module.css';

import { Link } from 'react-router-dom';

const CarElement = ({ manufacturer, model, ownerName, imageUrl, _id }) => {
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
export default CarElement;
