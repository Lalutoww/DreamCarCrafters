import styles from './SellCar.module.css';
import { useForm } from '../../../../hooks/useForm.js';
import { useNavigate } from 'react-router-dom';
import * as carService from '../../../../services/carService.js';

const SellCarFormKeys = {
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

const SellCar = () => {
   const navigate = useNavigate();
   const { formValues, onChangeHandler, onSubmit } = useForm(
      async (formData) => {
         try {
            await carService.create(formData);
            navigate('/cars/browse');
         } catch (err) {
            console.log(err);
         }
      },
      {
         [SellCarFormKeys.Manufacturer]: '',
         [SellCarFormKeys.Model]: '',
         [SellCarFormKeys.Year]: '',
         [SellCarFormKeys.Color]: '',
         [SellCarFormKeys.Engine]: '',
         [SellCarFormKeys.Horsepower]: '',
         [SellCarFormKeys.ImageUrl]: '',
         [SellCarFormKeys.Price]: '',
         [SellCarFormKeys.Description]: '',
      }
   );
   return (
      <>
         <div className='header'>
            <h1>Sell Car</h1>
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
                  name={SellCarFormKeys.Manufacturer}
                  value={formValues[SellCarFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Peugeot"
               />

               <label htmlFor="model">Model:</label>
               <input
                  type="text"
                  id="model"
                  name={SellCarFormKeys.Model}
                  value={formValues[SellCarFormKeys.Model]}
                  onChange={onChangeHandler}
                  placeholder="406"
               />

               <label htmlFor="year">Year of Production:</label>
               <input
                  type="number"
                  id="year"
                  name={SellCarFormKeys.Year}
                  value={formValues[SellCarFormKeys.Year]}
                  onChange={onChangeHandler}
                  placeholder="2001"
               />

               <label htmlFor="color">Color:</label>
               <input
                  type="text"
                  id="color"
                  name={SellCarFormKeys.Color}
                  value={formValues[SellCarFormKeys.Color]}
                  onChange={onChangeHandler}
                  placeholder="Silver"
               />

               <label htmlFor="engine">Engine:</label>
               <input
                  type="text"
                  id="engine"
                  name={SellCarFormKeys.Engine}
                  value={formValues[SellCarFormKeys.Engine]}
                  onChange={onChangeHandler}
                  placeholder="2.0 HDI"
               />

               <label htmlFor="horsepower">Horsepower:</label>
               <input
                  type="text"
                  id="horsepower"
                  name={SellCarFormKeys.Horsepower}
                  value={formValues[SellCarFormKeys.Horsepower]}
                  onChange={onChangeHandler}
                  placeholder="110"
               />
               <label htmlFor="imageUrl">Image URL:</label>
               <input
                  type="text"
                  id="imageUrl"
                  name={SellCarFormKeys.ImageUrl}
                  value={formValues[SellCarFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
                  placeholder="Image Url..."
               />

               <label htmlFor="price">Price:</label>
               <input
                  type="number"
                  id="price"
                  name={SellCarFormKeys.Price}
                  value={formValues[SellCarFormKeys.Price]}
                  onChange={onChangeHandler}
                  placeholder="1200"
               />

               <label htmlFor="description">Description:</label>
               <input
                  type="text"
                  id="description"
                  name={SellCarFormKeys.Description}
                  value={formValues[SellCarFormKeys.Description]}
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
