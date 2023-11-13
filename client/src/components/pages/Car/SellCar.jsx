import styles from './SellCar.module.css';

const SellCar = () => {
   return (
      <>
         <section className={styles['create-page']} id="createPage">
            <form className={styles['create-form']} id="createForm">
               <label for="name">Name:</label>
               <input type="text" id="name" name="name" placeholder="Name..." />

               <label for="type">Type:</label>
               <input type="text" id="type" name="type" placeholder="Type..." />

               <label for="production">Year of Production:</label>
               <input
                  type="number"
                  id="production"
                  name="production"
                  placeholder="Year of Production..."
               />

               <label for="exploitation">Years of Exploitation:</label>
               <input
                  type="number"
                  id="exploitation"
                  name="exploitation"
                  placeholder="Year of Exploitation..."
               />

               <label for="damages">Damages:</label>
               <input
                  type="text"
                  id="damages"
                  name="damages"
                  placeholder="Damages..."
               />

               <label for="image">Image:</label>
               <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Image..."
               />

               <label for="price">Price:</label>
               <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price..."
               />

               <label for="description">Description:</label>
               <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description..."
               />

               <input type="submit" class="create" value="Create Offer" />
            </form>
         </section>
      </>
   );
};

export default SellCar;
