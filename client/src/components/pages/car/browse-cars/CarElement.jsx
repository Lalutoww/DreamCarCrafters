import { Link } from 'react-router-dom';
import separateNumbers from '../../../../utils/separateNumbers.js'

const CarElement = ({ manufacturer, model, price, styles, imageUrl, id }) => {
   return (
      <Link
         to={`/cars/details/${id}`}
         className={styles['added-cars-in-market']}
      >
         <img src={imageUrl} className={styles['picture-added-cars']} />
         <h3>
            {manufacturer} {model}
         </h3>
         <span>Price: ${separateNumbers(price)}</span>
      </Link>
   );
};
export default CarElement;
