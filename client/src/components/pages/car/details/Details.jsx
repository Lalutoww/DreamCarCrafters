import styles from './Details.module.css';
import { useState, useEffect, useContext } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import * as carService from '../../../../services/carService.js';
import AuthContext from '../../../../contexts/authContext.jsx';
import separateNumbers from '../../../../utils/separateNumbers.js';

const Details = () => {
   const navigate = useNavigate();
   const { userId } = useContext(AuthContext);
   const [car, setCar] = useState({});
   const { carId } = useParams();

   useEffect(() => {
      carService.getOne(carId).then(setCar);
   }, [carId]);

   const deleteButtonClickHandler = async () => {
      const hasConfirmed = confirm(
         `Are you sure you want to delete ${car.manufacturer} ${car.model}`
      );

      if (hasConfirmed) {
         await carService.remove(carId);

         navigate('/cars/browse');
      }
   };

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
                  <h2>Price: ${separateNumbers(car.price)}</h2>
               </div>

               <div className={styles['buttons']}>
                  {userId !== car._ownerId && <button>Buy</button>}

                  {userId === car._ownerId && (
                     <>
                        <Link to={`/cars/edit/${carId}`} className={styles['button']}>Edit</Link>
                        <button className={styles['button']} onClick={deleteButtonClickHandler}>Delete</button>
                     </>
                  )}
               </div>
            </div>
         </section>
      </>
   );
};

export default Details;
