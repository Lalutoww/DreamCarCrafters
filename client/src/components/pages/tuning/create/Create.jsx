import styles from './Create.module.css';

const Create = () => {
   return (
      <>
         <div className={styles['header']}>
            <h1>Create Parts</h1>
         </div>
         <section className={styles['create-page']} id="loginPage">
            <form className={styles['create-form']} method="">
               <label htmlFor="name">Part Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="DRIVEGUARD PLUS"
               />
               <label htmlFor="manufacturer">Manufacturer</label>
               <input
                  type="text"
                  id="manufacturer"
                  name="manufacturer"
                  placeholder="Bridgestone"
               />
               <label htmlFor="description">Description</label>
               <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Touring tire comfort meets all-season confidence in the DriveGuard Plus."
               ></input>
               <label htmlFor="image">ImageUrl</label>
               <input type="text" id="image" name="image" />
               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default Create;
