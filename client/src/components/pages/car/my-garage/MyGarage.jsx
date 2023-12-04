import { useEffect, useState, useContext } from 'react';
import styles from './MyGarage.module.css';
import * as carService from '../../../../services/carService.js';
import MyCarElement from './MyCarElement.jsx';
import AuthContext from '../../../../contexts/authContext.jsx';

const MyGarage = () => {
   const { userId } = useContext(AuthContext);
   const [myCars, setMyCars] = useState([]);
   const [showNoCars, setShowNoCars] = useState(false);

   useEffect(() => {
      carService
         .getGarageCars(userId)
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
         <div className={styles['no-cars']}>
            You have no cars in your garage!
         </div>
      );
   }
   return (
      <>
         <div className='header'>
            <h1>My Garage</h1>
         </div>
         <section id="viewCatalog" className={styles['background-img']}>
            <div className={styles['added-cars']}>
               {myCars.map((car) => (
                  <MyCarElement
                     key={car._id}
                     {...car}
                  />
               ))}
            </div>
         </section>
      </>
   );
};

export default MyGarage;
