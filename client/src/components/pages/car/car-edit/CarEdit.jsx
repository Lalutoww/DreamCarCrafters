import styles from './CarEdit.module.css';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as carService from '../../../../services/carService.js';
import { listEditCarErrorHandler } from '../../../../utils/errorHandler.js';
import AuthContext from '../../../../contexts/authContext.jsx';
import ErrorAlert from '../../../errorAlert/ErrorAlert.jsx';

const EditCarFormKeys = {
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
      [EditCarFormKeys.Manufacturer]: '',
      [EditCarFormKeys.Model]: '',
      [EditCarFormKeys.Year]: '',
      [EditCarFormKeys.Color]: '',
      [EditCarFormKeys.Engine]: '',
      [EditCarFormKeys.Horsepower]: '',
      [EditCarFormKeys.ImageUrl]: '',
      [EditCarFormKeys.Description]: '',
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

         navigate(`/cars/details/${carId}`);
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
         <section className={styles['edit-container']}>
            <form className={styles['edit-form']} onSubmit={editCarSubmitHandler}>
               <label htmlFor={EditCarFormKeys.Manufacturer}>Manufacturer</label>
               <input
                  type="text"
                  id={EditCarFormKeys.Manufacturer}
                  name={EditCarFormKeys.Manufacturer}
                  value={car[EditCarFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Manufacturer"
               />
               <label htmlFor={EditCarFormKeys.Model}>Model</label>
               <input
                  type="text"
                  id={EditCarFormKeys.Model}
                  name={EditCarFormKeys.Model}
                  value={car[EditCarFormKeys.Model]}
                  onChange={onChangeHandler}
                  placeholder="Model"
               />
               <label htmlFor={EditCarFormKeys.Year}>Year of production</label>
               <input
                  type="number"
                  id={EditCarFormKeys.Year}
                  name={EditCarFormKeys.Year}
                  value={car[EditCarFormKeys.Year]}
                  onChange={onChangeHandler}
                  placeholder="Year of production"
               />
               <label htmlFor={EditCarFormKeys.Color}>Color</label>
               <input
                  type="text"
                  id={EditCarFormKeys.Color}
                  name={EditCarFormKeys.Color}
                  value={car[EditCarFormKeys.Color]}
                  onChange={onChangeHandler}
                  placeholder="Color"
               />
               <label htmlFor={EditCarFormKeys.Engine}>Engine</label>
               <input
                  type="text"
                  id={EditCarFormKeys.Engine}
                  name={EditCarFormKeys.Engine}
                  value={car[EditCarFormKeys.Engine]}
                  onChange={onChangeHandler}
                  placeholder="Engine"
               />
               <label htmlFor={EditCarFormKeys.Horsepower}>Horsepower</label>
               <input
                  type="number"
                  id={EditCarFormKeys.Horsepower}
                  name={EditCarFormKeys.Horsepower}
                  value={car[EditCarFormKeys.Horsepower]}
                  onChange={onChangeHandler}
                  placeholder="Horsepower"
               />
               <label htmlFor={EditCarFormKeys.ImageUrl}>Image Url</label>
               <input
                  type="text"
                  id={EditCarFormKeys.ImageUrl}
                  name={EditCarFormKeys.ImageUrl}
                  value={car[EditCarFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
                  placeholder="ImageUrl"
               />
               <label htmlFor={EditCarFormKeys.Description}>Description</label>
               <textarea
                  type="text"
                  id={EditCarFormKeys.Description}
                  name={EditCarFormKeys.Description}
                  value={car[EditCarFormKeys.Description]}
                  onChange={onChangeHandler}
                  placeholder="Description"
               />
               <input type="submit" />
            </form>
         </section>
      </>
   );
}
