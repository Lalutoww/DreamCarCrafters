import { useEffect, useState } from 'react';
import styles from './BrowseCars.module.css';
import * as carService from '../../services/carService.js';

import CarElement from './CarElement.jsx';
const BrowseCars = () => {
   const [allCars, setAllCars] = useState([]);
   const [showNoCars, setShowNoCars] = useState(false);

   useEffect(() => {
      carService
         .getAll()
         .then((result) => setAllCars(result))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      if (allCars.length <= 0) {
         setShowNoCars(true);
      } else {
         setShowNoCars(false);
      }
   }, [allCars]);
   if (showNoCars) {
      return <div className={styles['guest']}>There are no cars for sale!</div>;
   }

   return (
      <>
         <div className={styles['header']}><h1>Car Catalogue</h1></div>
         <section id="viewCatalog" className={styles['background-img']}>
            <div className={styles['added-cars']}>
               {allCars.map((car) => (
                  <CarElement
                     key={car._id}
                     manufacturer={car.manufacturer}
                     model={car.model}
                     price={car.price}
                     styles={styles}
                     imageUrl={car.imageUrl}
                  />
               ))}
            </div>
         </section>
      </>
   );
};

export default BrowseCars;