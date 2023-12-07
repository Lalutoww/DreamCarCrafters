import styles from './CarEdit.module.css';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as carService from '../../../../services/carService.js';
import { listEditCarErrorHandler } from '../../../../utils/errorHandler.js';
import AuthContext from '../../../../contexts/authContext.jsx';
import ErrorAlert from '../../../errorAlert/ErrorAlert.jsx';

const ListCarFormKeys = {
   Manufacturer: 'manufacturer',
   Model: 'model',
   Year: 'year',
   Color: 'color',
   Engine: 'engine',
   Horsepower: 'horsepower',
   ImageUrl: 'imageUrl',
   Description: 'description',
};

export default function CarEdit() {
   const { carId } = useParams();
   const navigate = useNavigate();
   const { show, closeHandler, scrollToTopAndShowError } = useContext(AuthContext);
   const [car, setCar] = useState({
      [ListCarFormKeys.Manufacturer]: '',
      [ListCarFormKeys.Model]: '',
      [ListCarFormKeys.Year]: '',
      [ListCarFormKeys.Color]: '',
      [ListCarFormKeys.Engine]: '',
      [ListCarFormKeys.Horsepower]: '',
      [ListCarFormKeys.ImageUrl]: '',
      [ListCarFormKeys.Description]: '',
   });

   useEffect(() => {
      carService.getOne(carId).then((result) => {
         setCar(result);
      });
   }, [carId]);

   const editCarSubmitHandler = async (e) => {
      e.preventDefault();
      try {
         listEditCarErrorHandler({
            manufacturer: car.manufacturer,
            model: car.model,
            year: car.year,
            color: car.color,
            engine: car.engine,
            horsepower: car.horsepower,
            imageUrl: car.imageUrl,
            description: car.description,
         });
         await carService.edit(carId, car);

         navigate('/cars/browse');
      } catch (error) {
         scrollToTopAndShowError(error)
      }
   };

   const onChangeHandler = (e) => {
      setCar((state) => ({
         ...state,
         [e.target.name]: e.target.value,
      }));
   };

   return (
      <>
      {show && <ErrorAlert closeHandler={closeHandler} />}
         <div className="header">
            <h1>Edit Car</h1>
         </div>
         <section className={styles['create-page']} id="createPage">
            <form
               onSubmit={editCarSubmitHandler}
               className={styles['create-form']}
               id="createForm"
            >
               <label htmlFor="manufacturer">Manufacturer:</label>
               <input
                  type="text"
                  id="manufacturer"
                  name={ListCarFormKeys.Manufacturer}
                  value={car[ListCarFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Peugeot"
               />

               <label htmlFor="model">Model:</label>
               <input
                  type="text"
                  id="model"
                  name={ListCarFormKeys.Model}
                  value={car[ListCarFormKeys.Model]}
                  onChange={onChangeHandler}
                  placeholder="406"
               />

               <label htmlFor="year">Year of Production:</label>
               <input
                  type="number"
                  id="year"
                  name={ListCarFormKeys.Year}
                  value={car[ListCarFormKeys.Year]}
                  onChange={onChangeHandler}
                  placeholder="2001"
               />

               <label htmlFor="color">Color:</label>
               <input
                  type="text"
                  id="color"
                  name={ListCarFormKeys.Color}
                  value={car[ListCarFormKeys.Color]}
                  onChange={onChangeHandler}
                  placeholder="Silver"
               />

               <label htmlFor="engine">Engine:</label>
               <input
                  type="text"
                  id="engine"
                  name={ListCarFormKeys.Engine}
                  value={car[ListCarFormKeys.Engine]}
                  onChange={onChangeHandler}
                  placeholder="2.0 HDI"
               />

               <label htmlFor="horsepower">Horsepower:</label>
               <input
                  type="text"
                  id="horsepower"
                  name={ListCarFormKeys.Horsepower}
                  value={car[ListCarFormKeys.Horsepower]}
                  onChange={onChangeHandler}
                  placeholder="110"
               />
               <label htmlFor="imageUrl">Image URL:</label>
               <input
                  type="text"
                  id="imageUrl"
                  name={ListCarFormKeys.ImageUrl}
                  value={car[ListCarFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
                  placeholder="Image Url..."
               />

               <label htmlFor="description">Description:</label>
               <input
                  type="text"
                  id="description"
                  name={ListCarFormKeys.Description}
                  value={car[ListCarFormKeys.Description]}
                  onChange={onChangeHandler}
                  placeholder="Description..."
               />

               <input type="submit" className="edit" />
            </form>
         </section>
      </>
   );
}
