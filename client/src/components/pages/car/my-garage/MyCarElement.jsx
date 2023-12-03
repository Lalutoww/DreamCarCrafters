import { Link } from 'react-router-dom';
import styles from './MyGarage.module.css'

const MyCarElement = ({ manufacturer, model, imageUrl, _id }) => {
   return (
      <Link
         to={`/cars/details/${_id}`}
         className={styles['added-cars-in-market']}
      >
         <img src={imageUrl} className={styles['picture-added-cars']} />
         <h3>
            {manufacturer} {model}
         </h3>
      </Link>
   );
};

export default MyCarElement;
