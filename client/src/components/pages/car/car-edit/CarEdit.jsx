import styles from './CarEdit.module.css';
import { useNavigate, useParams } from 'react-router-dom';

import * as carService from '../../../../services/carService.js';
import { useEffect, useState } from 'react';

const ListCarFormKeys = {
   Manufacturer: 'manufacturer',
   Model: 'model',
   Year: 'year',
   Color: 'color',
   Engine: 'engine',
   Horsepower: 'horsepower',
   ImageUrl: 'imageUrl',
   Price: 'price',
   Description: 'description',
};

export default function CarEdit() {
   const navigate = useNavigate();
   const { carId } = useParams();
   const [car, setCar] = useState({
      [ListCarFormKeys.Manufacturer]: '',
      [ListCarFormKeys.Model]: '',
      [ListCarFormKeys.Year]: '',
      [ListCarFormKeys.Color]: '',
      [ListCarFormKeys.Engine]: '',
      [ListCarFormKeys.Horsepower]: '',
      [ListCarFormKeys.ImageUrl]: '',
      [ListCarFormKeys.Price]: '',
      [ListCarFormKeys.Description]: '',
   });

   useEffect(() => {
      carService.getOne(carId).then((result) => {
         setCar(result);
      });
   }, [carId]);

   const onSubmit = async (e) => {
      e.preventDefault();
      try {
         await carService.edit(carId, car);

         navigate('/cars/browse');
      } catch (err) {
         console.log(err);
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
         <div className="header">
            <h1>Edit Car</h1>
         </div>
         <section className={styles['create-page']} id="createPage">
            <form
               onSubmit={onSubmit}
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

               <label htmlFor="price">Price:</label>
               <input
                  type="number"
                  id="price"
                  name={ListCarFormKeys.Price}
                  value={car[ListCarFormKeys.Price]}
                  onChange={onChangeHandler}
                  placeholder="1200"
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
