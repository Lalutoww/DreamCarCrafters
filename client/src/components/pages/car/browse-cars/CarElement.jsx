import styles from './BrowseCars.module.css';

import { Link } from 'react-router-dom';

const CarElement = ({ manufacturer, model, ownerName, imageUrl, _id }) => {
   return (
      <Link
         to={`/cars/details/${_id}`}
         className={styles['added-cars-in-market']}
      >
         <img src={imageUrl} className={styles['picture-added-cars']} />
         <h3 className={styles['car-name']}>
            {manufacturer} {model}
         </h3>
         <span>Owner: {ownerName}</span>
      </Link>
   );
};
export default CarElement;
