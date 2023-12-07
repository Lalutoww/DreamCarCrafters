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
            <h1>Add Part</h1>
         </div>
         <section className={styles['create-page']} id="createPartsPage">
            <form className={styles['create-form']} onSubmit={onSubmit}>
               <label htmlFor="name">Part Name</label>
               <input
                  type="text"
                  id="name"
                  name={PartFormKeys.Name}
                  value={formValues[PartFormKeys.Name]}
                  onChange={onChangeHandler}
                  placeholder="DRIVEGUARD PLUS"
               />
               <label htmlFor="manufacturer">Manufacturer</label>
               <input
                  type="text"
                  id="manufacturer"
                  name={PartFormKeys.Manufacturer}
                  value={formValues[PartFormKeys.Manufacturer]}
                  onChange={onChangeHandler}
                  placeholder="Bridgestone"
               />
               <label htmlFor="description">Description</label>
               <input
                  type="text"
                  id="description"
                  name={PartFormKeys.Description}
                  value={formValues[PartFormKeys.Description]}
                  onChange={onChangeHandler}
                  placeholder="Touring tire comfort meets all-season confidence in the DriveGuard Plus."
               ></input>
               <label htmlFor="imageUrl">ImageUrl</label>
               <input
                  type="text"
                  id="imageUrl"
                  name={PartFormKeys.ImageUrl}
                  value={formValues[PartFormKeys.ImageUrl]}
                  onChange={onChangeHandler}
               />
               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default CreateParts;
