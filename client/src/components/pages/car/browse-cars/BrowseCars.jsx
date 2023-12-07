import styles from './BrowseCars.module.css';

import { useEffect, useState } from 'react';
import * as carService from '../../../../services/carService.js';
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
      return (
         <div className={styles['no-cars']}>There are no cars for sale!</div>
      );
   }

   return (
      <>
         <div className="header">
            <h1>Car Catalogue</h1>
         </div>
         <div className={styles['catalogue']}>
            {allCars.map((car) => (
               <CarElement key={car._id} {...car} />
            ))}
         </div>
      </>
   );
};

export default BrowseCars;
