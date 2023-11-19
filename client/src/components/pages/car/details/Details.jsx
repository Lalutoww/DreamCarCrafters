import styles from './Details.module.css';
import { Link } from 'react-router-dom';

const Details = () => {
   return (
      <>
         <div className={styles['header']}>
            <h1>Details Page</h1>
         </div>
         <section className={styles['details-page']} id="detailsPage">
            <div className={styles['details-info']} id="detailsInfo">
               <div className={styles['info']}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Peugeot_406_2003.jpg/1200px-Peugeot_406_2003.jpg" />
               </div>

               <div className={styles['info']}>
                  <h3>Manufacturer: Peugeot</h3>
                  <h3>Model: 406</h3>
                  <h3>Year of Production: 2001</h3>
                  <h3>
                     Description: The Peugeot 406 is a stylish and versatile
                     midsize car that combines elegance with performance. Known
                     for its sleek design and comfortable interior, the 406
                     offers a smooth driving experience with responsive
                     handling. With a range of engine options and advanced
                     features, this Peugeot model strikes a balance between
                     practicality and sophistication, making it a popular choice
                     for those seeking a well-rounded and enjoyable driving
                     experience.
                  </h3>
                  <h2>Price: $153</h2>
               </div>

               {/* <!--If there is user logged in--> */}
               <div className={styles['buttons']}>
                  {/* <!--If user is not owner of the toy post--> */}
                  <Link to="#" className={styles['like-btn']}>
                     Like
                  </Link>

                  {/* <!--If user is owner--> */}
                  <Link to="#" className={styles['edit-btn']}>
                     Edit
                  </Link>
                  <Link to="#" className={styles['delete-btn']}>
                     Delete
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
};

export default Details;
