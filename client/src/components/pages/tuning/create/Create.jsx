import { useForm } from '../../../../hooks/useForm.js';
import styles from './Create.module.css';

const Create = () => {
   const { formValues, onChangeHandler, onSubmit } = useForm({
      name: '',
      manufacturer: '',
      description: '',
      imageUrl: '',
   }, (formData)=>{
      console.log(formData)
   });
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
                  name="name"
                  value={formValues.name}
                  onChange={onChangeHandler}
                  placeholder="DRIVEGUARD PLUS"
               />
               <label htmlFor="manufacturer">Manufacturer</label>
               <input
                  type="text"
                  id="manufacturer"
                  name="manufacturer"
                  value={formValues.manufacturer}
                  onChange={onChangeHandler}
                  placeholder="Bridgestone"
               />
               <label htmlFor="description">Description</label>
               <input
                  type="text"
                  id="description"
                  name="description"
                  value={formValues.description}
                  onChange={onChangeHandler}
                  placeholder="Touring tire comfort meets all-season confidence in the DriveGuard Plus."
               ></input>
               <label htmlFor="imageUrl">ImageUrl</label>
               <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formValues.imageUrl}
                  onChange={onChangeHandler}
               />
               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default Create;
