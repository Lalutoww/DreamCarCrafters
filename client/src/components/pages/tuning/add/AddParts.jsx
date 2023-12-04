import { useEffect, useState } from 'react';
import { useForm } from '../../../../hooks/useForm.js';
import styles from './AddParts.module.css';

const PartFormKeys = {
   PartName: 'partName',
};

const AddParts = () => {
   const { formValues, onChangeHandler, onSubmit, isButtonDisabled } = useForm(
      (formData) => {
         console.log(formData);
      },
      {
         [PartFormKeys.PartName]: '',
      }
   );
   return (
      <>
         <div className={styles['header']}>
            <h1>Add Parts</h1>
         </div>
         <section className={styles['create-page']} id="createPartsPage">
            <form className={styles['create-form']} onSubmit={onSubmit}>
               <label htmlFor="name">Part Name</label>
               <select
                  className={styles['select']}
                  name="partName"
                  id="partName"
                  onChange={onChangeHandler}
                  value={formValues['PartName']}
               >
                  <option value="partName">-- Part Name --</option>
                  <option value="spoiler">Spoiler</option>
                  <option value="spoiler2">Spoiler2</option>
               </select>
               <input disabled={isButtonDisabled} type="submit" />
            </form>
         </section>
      </>
   );
};

export default AddParts;
