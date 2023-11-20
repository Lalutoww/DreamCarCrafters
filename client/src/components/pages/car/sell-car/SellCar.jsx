import styles from './SellCar.module.css';
import { useForm } from '../../../../hooks/useForm.js';
import { useNavigate } from 'react-router-dom';
import * as carService from '../../../../services/carService.js';

const SellCar = () => {
   const navigate = useNavigate();
   const { formValues, onChangeHandler, onSubmit } = useForm(
      {
         manufacturer: '',
         model: '',
         year: '',
         color: '',
         engine: '',
         horsepower: '',
         price: '',
         description: '',
         imageUrl: '',
      },
      async (formData) => {
         try {
            await carService.create(formData);
            navigate('/cars/browse');
         } catch (err) {
            console.log(err);
         }
      }
   );
   return (
      <>
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
                  name="manufacturer"
                  value={formValues.manufacturer}
                  onChange={onChangeHandler}
                  placeholder="Peugeot"
               />

               <label htmlFor="model">Model:</label>
               <input
                  type="text"
                  id="model"
                  name="model"
                  value={formValues.type}
                  onChange={onChangeHandler}
                  placeholder="406"
               />

               <label htmlFor="year">Year of Production:</label>
               <input
                  type="number"
                  id="year"
                  name="year"
                  value={formValues.year}
                  onChange={onChangeHandler}
                  placeholder="2001"
               />

               <label htmlFor="color">Color:</label>
               <input
                  type="text"
                  id="color"
                  name="color"
                  value={formValues.color}
                  onChange={onChangeHandler}
                  placeholder="Silver"
               />

               <label htmlFor="engine">Engine:</label>
               <input
                  type="text"
                  id="engine"
                  name="engine"
                  value={formValues.engine}
                  onChange={onChangeHandler}
                  placeholder="2.0 HDI"
               />

               <label htmlFor="horsepower">Horsepower:</label>
               <input
                  type="text"
                  id="horsepower"
                  name="horsepower"
                  value={formValues.horsepower}
                  onChange={onChangeHandler}
                  placeholder="110"
               />
               <label htmlFor="imageUrl">Image URL:</label>
               <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formValues.imageUrl}
                  onChange={onChangeHandler}
                  placeholder="Image Url..."
               />

               <label htmlFor="price">Price:</label>
               <input
                  type="number"
                  id="price"
                  name="price"
                  value={formValues.price}
                  onChange={onChangeHandler}
                  placeholder="1200"
               />

               <label htmlFor="description">Description:</label>
               <input
                  type="text"
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={onChangeHandler}
                  placeholder="Description..."
               />

               <input type="submit" className="create" />
            </form>
         </section>
      </>
   );
};

export default SellCar;
