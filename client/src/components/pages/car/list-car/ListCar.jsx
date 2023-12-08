import styles from './ListCar.module.css';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../../../hooks/useForm.js';
import AuthContext from '../../../../contexts/authContext.jsx';
import { listEditCarErrorHandler } from '../../../../utils/errorHandler.js';
import * as carService from '../../../../services/carService.js'
import Path from '../../../../paths.js';

import ErrorAlert from '../../../errorAlert/ErrorAlert.jsx';

const ListCarFormKeys = {
   Manufacturer: 'manufacturer',
   Model: 'model',
   Year: 'year',
   Color: 'color',
   Engine: 'engine',
   Horsepower: 'horsepower',
   ImageUrl: 'imageUrl',
   OwnerName: 'ownerName',
   Description: 'description',
};

const ListCar = () => {
   const { show, closeHandler, scrollToTopAndShowError, username } =
      useContext(AuthContext);
   const navigate = useNavigate();
   const { formValues, onChangeHandler, onSubmit } = useForm(
      async (values) => {
         try {
            listEditCarErrorHandler(values);
            await carService.create(values);
            navigate(Path.BrowseCars);
         } catch (error) {
            scrollToTopAndShowError(error);
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
         [ListCarFormKeys.OwnerName]: username,
         [ListCarFormKeys.Description]: '',
      }
   );

   return (
      <>
         {show && <ErrorAlert closeHandler={closeHandler} />}
         <div className="header">
            <h1>List Car</h1>
         </div>
         <section className={styles['list-container']}>
            <form className={styles['list-form']} onSubmit={onSubmit}>
               <label htmlFor={ListCarFormKeys.Manufacturer}>Manufacturer</label>
               <input
                  type="text"
                  name={ListCarFormKeys.Manufacturer}
                  value={formValues[ListCarFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Manufacturer"
               />
               <label htmlFor={ListCarFormKeys.Model}>Model</label>
               <input
                  type="text"
                  name={ListCarFormKeys.Model}
                  value={formValues[ListCarFormKeys.Model]}
                  onChange={onChangeHandler}
                  placeholder="Model"
               />
               <label htmlFor={ListCarFormKeys.Year}>Year of production</label>
               <input
                  type="number"
                  name={ListCarFormKeys.Year}
                  value={formValues[ListCarFormKeys.Year]}
                  onChange={onChangeHandler}
                  placeholder="Year of production"
               />
               <label htmlFor={ListCarFormKeys.Color}>Color</label>
               <input
                  type="text"
                  name={ListCarFormKeys.Color}
                  value={formValues[ListCarFormKeys.Color]}
                  onChange={onChangeHandler}
                  placeholder="Color"
               />
               <label htmlFor={ListCarFormKeys.Engine}>Engine</label>
               <input
                  type="text"
                  name={ListCarFormKeys.Engine}
                  value={formValues[ListCarFormKeys.Engine]}
                  onChange={onChangeHandler}
                  placeholder="Engine"
               />
               <label htmlFor={ListCarFormKeys.Horsepower}>Horsepower</label>
               <input
                  type="number"
                  name={ListCarFormKeys.Horsepower}
                  value={formValues[ListCarFormKeys.Horsepower]}
                  onChange={onChangeHandler}
                  placeholder="Horsepower"
               />
               <label htmlFor={ListCarFormKeys.ImageUrl}>Image Url</label>
               <input
                  type="text"
                  name={ListCarFormKeys.ImageUrl}
                  value={formValues[ListCarFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
                  placeholder="ImageUrl"
               />
               <label htmlFor="description">Description</label>
               <textarea
                  type="text"
                  name={ListCarFormKeys.Description}
                  value={formValues[ListCarFormKeys.Description]}
                  onChange={onChangeHandler}
                  placeholder="Description"
               />
               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default ListCar;
