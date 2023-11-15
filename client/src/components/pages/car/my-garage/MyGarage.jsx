import { useEffect, useState } from 'react';
import styles from './MyGarage.module.css';
import * as carService from '../../../../services/carService.js';
import MyCarElement from './MyCarElement.jsx';

const MyGarage = () => {
   const [myCars, setMyCars] = useState([]);
   const [showNoCars, setShowNoCars] = useState(false);

   useEffect(() => {
      carService
         .getAll()
         .then((result) => setMyCars(result))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      if (myCars.length <= 0) {
         setShowNoCars(true);
      } else {
         setShowNoCars(false);
      }
   }, [myCars]);
   if (showNoCars) {
      return (
         <div className={styles['no-cars']}>There are no cars for sale!</div>
      );
   }
   return (
      <>
         <div className={styles['header']}>
            <h1>My Garage</h1>
         </div>
         <section id="my-posts">
            <div className={styles['my-container']}>
               <div className={styles['my-card']}>
                  <MyCarElement />
               </div>
            </div>
         </section>
      </>
   );
};

export default MyGarage;
