import styles from './CreateParts.module.css';

import { useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm.js';
import * as partService from '../../../services/partService.js';

const PartFormKeys = {
   Name: 'name',
   Manufacturer: 'manufacturer',
   Description: 'description',
   ImageUrl: 'imageUrl',
};

const CreateParts = () => {
   const { carId } = useParams();
   const { formValues, onChangeHandler, onSubmit } = useForm(
      async (formData) => {
         try {
            await partService.create(carId, formData);
            navigate(`/cars/details/${carId}`);
         } catch (err) {
            console.log(err);
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
         <div className={styles['header']}>
            <h1>Create Parts</h1>
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
