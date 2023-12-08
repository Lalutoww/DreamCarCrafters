import styles from './CreateParts.module.css';

import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm.js';
import {createPartsErrorHandler} from '../../../utils/errorHandler.js'
import * as partService from '../../../services/partService.js';
import AuthContext from '../../../contexts/authContext.jsx';

import ErrorAlert from '../../errorAlert/ErrorAlert.jsx';

const PartFormKeys = {
   Name: 'name',
   Manufacturer: 'manufacturer',
   Description: 'description',
   ImageUrl: 'imageUrl',
};

const CreateParts = () => {
   const {show, closeHandler, scrollToTopAndShowError} = useContext(AuthContext);
   const navigate = useNavigate();
   const {carId} = useParams();
   const { formValues, onChangeHandler, onSubmit } = useForm(
      async (values) => {
         try {
            createPartsErrorHandler(values);
            await partService.create(carId, values);
            navigate(`/cars/details/${carId}`);
         } catch (error) {
            console.log(error);
            scrollToTopAndShowError(error);
         }
      },
      {
         [PartFormKeys.Name]: '',
         [PartFormKeys.Manufacturer]: '',
         [PartFormKeys.Description]: '',
         [PartFormKeys.ImageUrl]: '',
      }
   );
   return (
      <>
      {show && <ErrorAlert closeHandler={closeHandler}/>}
         <div className='header'>
            <h1>Add Tuning</h1>
         </div>
         <section className={styles['tuning-container']}>
            <form className={styles['tuning-form']} onSubmit={onSubmit}>
               <label htmlFor="partName">Part name</label>
               <input
                  type="text"
                  name={PartFormKeys.Name}
                  value={formValues[PartFormKeys.Name]}
                  onChange={onChangeHandler}
                  placeholder="Name"
               />
               <label htmlFor="partManufacturer">Manufacturer</label>
               <input
                  type="text"
                  name={PartFormKeys.Manufacturer}
                  value={formValues[PartFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Manufacturer"
               />
               <label htmlFor="imageUrl">Image Url</label>
               <input
                  type="text"
                  name={PartFormKeys.ImageUrl}
                  value={formValues[PartFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
                  placeholder="Image Url"
               />
               <label htmlFor="description">Description</label>
               <textarea
                  type="text"
                  name={PartFormKeys.Description}
                  value={formValues[PartFormKeys.Description]}
                  onChange={onChangeHandler}
                  placeholder="Description"
               />
               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default CreateParts;
