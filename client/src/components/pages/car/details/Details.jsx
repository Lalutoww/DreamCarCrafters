import styles from './Details.module.css';
import { useState, useEffect, useContext } from 'react';

import { Link, useParams } from 'react-router-dom';

import * as carService from '../../../../services/carService.js';
import AuthContext from '../../../../contexts/authContext.jsx';

const Details = () => {
   const { userId } = useContext(AuthContext);
   const [car, setCar] = useState({});
   const { carId } = useParams();

   useEffect(() => {
      carService.getOne(carId).then(setCar);
   }, [carId]);

   return (
      <>
         <div className={styles['header']}>
            <h1>Details Page</h1>
         </div>
         <section className={styles['details-page']} id="detailsPage">
            <div className={styles['details-info']} id="detailsInfo">
               <div className={styles['info']}>
                  <img src={car.imageUrl} />
               </div>

               <div className={styles['info']}>
                  <h3>Manufacturer: {car.manufacturer}</h3>
                  <h3>Model: {car.model}</h3>
                  <h3>Year of Production: {car.year}</h3>
                  <h3>Description: {car.description}</h3>
                  <h2>Price: ${car.price}</h2>
               </div>

               <div className={styles['buttons']}>
                  {userId !== car._ownerId && <Link to="#">Buy</Link>}

                  {userId === car._ownerId && (
                     <>
                        <Link to="#">Edit</Link>
                        <Link to="#">Delete</Link>
                     </>
                  )}
               </div>
            </div>
         </section>
      </>
   );
};

export default Details;
