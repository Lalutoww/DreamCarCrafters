import styles from './MyCarElement.module.css'

const MyCarElement = () => {
   return (
      <>
         <div className={styles['card-header']}>
            <img src="./static/img/Thestral.jpeg" />
         </div>
         <div className={styles['card-body']}>
            <span className={styles['tag tag-teal']}>Species: Beast</span>
            <h4>Name: Thestral</h4>
            <div className={styles['user']}>
               <div className={styles['user-info']}>
                  <h5>Author: Alex Smith</h5>
                  <small>Rating of votes: 3</small>
                  <a href="#" className={styles['details-btn']}>
                     Details
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default MyCarElement;
