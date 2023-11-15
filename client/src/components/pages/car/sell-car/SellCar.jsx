import styles from './SellCar.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as carService from '../../../../services/carService.js';

const formInitialState = {
   manufacturer: '',
   model: '',
   year: '',
   color: '',
   price: '',
   description: '',
   imageUrl: '',
};

const SellCar = () => {
   const navigate = useNavigate();
   const [formValues, setFormValues] = useState(formInitialState);

   const changeHandler = (e) => {
      const value = e.target.value;

      setFormValues((state) => ({
         ...state,
         [e.target.name]: value,
      }));
   };

   const submitHandler = async (e) => {
      e.preventDefault();

      const carData = formValues;

      try {
         await carService.create(carData);
         navigate('/cars/browse');
      } catch (err) {
         console.log(err);
      }

      resetFormHandler();
   };
   const resetFormHandler = () => {
      setFormValues(formInitialState);
   };
   return (
      <>
         <section className={styles['create-page']} id="createPage">
            <form
               onSubmit={submitHandler}
               className={styles['create-form']}
               id="createForm"
            >
               <label htmlFor="manufacturer">Manufacturer:</label>
               <input
                  type="text"
                  id="manufacturer"
                  name="manufacturer"
                  value={formValues.manufacturer}
                  onChange={changeHandler}
                  placeholder="Peugeot"
               />

               <label htmlFor="model">Model:</label>
               <input
                  type="text"
                  id="model"
                  name="model"
                  value={formValues.type}
                  onChange={changeHandler}
                  placeholder="406"
               />

               <label htmlFor="year">Year of Production:</label>
               <input
                  type="number"
                  id="year"
                  name="year"
                  value={formValues.year}
                  onChange={changeHandler}
                  placeholder="2001"
               />

               <label htmlFor="color">Color:</label>
               <input
                  type="text"
                  id="color"
                  name="color"
                  value={formValues.color}
                  onChange={changeHandler}
                  placeholder="Silver"
               />

               <label htmlFor="imageUrl">Image URL:</label>
               <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formValues.imageUrl}
                  onChange={changeHandler}
                  placeholder="Image Url..."
               />

               <label htmlFor="price">Price:</label>
               <input
                  type="number"
                  id="price"
                  name="price"
                  value={formValues.price}
                  onChange={changeHandler}
                  placeholder="1,200"
               />

               <label htmlFor="description">Description:</label>
               <input
                  type="text"
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={changeHandler}
                  placeholder="Description..."
               />

               <input type="submit" className="create" />
            </form>
         </section>
      </>
   );
};

export default SellCar;
