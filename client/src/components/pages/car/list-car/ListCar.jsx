import styles from './ListCar.module.css';
import { useForm } from '../../../../hooks/useForm.js';
import { useNavigate } from 'react-router-dom';
import * as carService from '../../../../services/carService.js';

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

const ListCar = () => {
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
         [ListCarFormKeys.Manufacturer]: '',
         [ListCarFormKeys.Model]: '',
         [ListCarFormKeys.Year]: '',
         [ListCarFormKeys.Color]: '',
         [ListCarFormKeys.Engine]: '',
         [ListCarFormKeys.Horsepower]: '',
         [ListCarFormKeys.ImageUrl]: '',
         [ListCarFormKeys.Price]: '',
         [ListCarFormKeys.Description]: '',
      }
   );
   return (
      <>
         <div className='header'>
            <h1>List Car</h1>
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
                  value={formValues[ListCarFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Peugeot"
               />

               <label htmlFor="model">Model:</label>
               <input
                  type="text"
                  id="model"
                  name={ListCarFormKeys.Model}
                  value={formValues[ListCarFormKeys.Model]}
                  onChange={onChangeHandler}
                  placeholder="406"
               />

               <label htmlFor="year">Year of Production:</label>
               <input
                  type="number"
                  id="year"
                  name={ListCarFormKeys.Year}
                  value={formValues[ListCarFormKeys.Year]}
                  onChange={onChangeHandler}
                  placeholder="2001"
               />

               <label htmlFor="color">Color:</label>
               <input
                  type="text"
                  id="color"
                  name={ListCarFormKeys.Color}
                  value={formValues[ListCarFormKeys.Color]}
                  onChange={onChangeHandler}
                  placeholder="Silver"
               />

               <label htmlFor="engine">Engine:</label>
               <input
                  type="text"
                  id="engine"
                  name={ListCarFormKeys.Engine}
                  value={formValues[ListCarFormKeys.Engine]}
                  onChange={onChangeHandler}
                  placeholder="2.0 HDI"
               />

               <label htmlFor="horsepower">Horsepower:</label>
               <input
                  type="text"
                  id="horsepower"
                  name={ListCarFormKeys.Horsepower}
                  value={formValues[ListCarFormKeys.Horsepower]}
                  onChange={onChangeHandler}
                  placeholder="110"
               />
               <label htmlFor="imageUrl">Image URL:</label>
               <input
                  type="text"
                  id="imageUrl"
                  name={ListCarFormKeys.ImageUrl}
                  value={formValues[ListCarFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
                  placeholder="Image Url..."
               />

               <label htmlFor="price">Price:</label>
               <input
                  type="number"
                  id="price"
                  name={ListCarFormKeys.Price}
                  value={formValues[ListCarFormKeys.Price]}
                  onChange={onChangeHandler}
                  placeholder="1200"
               />

               <label htmlFor="description">Description:</label>
               <input
                  type="text"
                  id="description"
                  name={ListCarFormKeys.Description}
                  value={formValues[ListCarFormKeys.Description]}
                  onChange={onChangeHandler}
                  placeholder="Description..."
               />

               <input type="submit" className="create" />
            </form>
         </section>
      </>
   );
};

export default ListCar;
