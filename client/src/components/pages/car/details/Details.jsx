import styles from './Details.module.css';

import { useState, useEffect, useContext } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import * as carService from '../../../../services/carService.js';
import * as partService from '../../../../services/partService.js';
import * as likeService from '../../../../services/likeService.js';
import AuthContext from '../../../../contexts/authContext.jsx';
import separateNumbers from '../../../../utils/separateNumbers.js';
import PartItem from './partItem.jsx';

const Details = () => {
   const navigate = useNavigate();
   const { userId, isAuthenticated } = useContext(AuthContext);
   const [car, setCar] = useState({});
   const [parts, setParts] = useState([]);
   const [likes, setLikes] = useState([]);
   const [hasLiked, setHasLiked] = useState(false);
   const { carId } = useParams();

   useEffect(() => {
      carService.getOne(carId).then(setCar);
   }, [carId]);

   useEffect(() => {
      partService
         .getAll(carId)
         .then((result) => setParts(result))
         .catch((err) => console.log(err));
   }, []);
   useEffect(() => {
      likeService
         .getAll(carId)
         .then((result) => setLikes(result))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      likeService
         .getAll(carId)
         .then((result) => {
            result.map((like => {
               if(like.userId === userId) return setHasLiked(true);
            } ))
         })
         .catch((err) => console.log(err));
   }, []);
   const deleteButtonClickHandler = async () => {
      const hasConfirmed = confirm(
         `Are you sure you want to delete ${car.manufacturer} ${car.model}`
      );

      if (hasConfirmed) {
         await carService.remove(carId);

         navigate('/cars/browse');
      }
   };

   const likeButtonClickHandler = async () => {
         const newLike = await likeService.like(carId, userId);
         const newState = [...likes, newLike]
         setLikes(newState);
         setHasLiked(true);
   }

   return (
      <>
         <div className="header">
            <h1>Details Page</h1>
         </div>
         <section className={styles['details-page']} id="detailsPage">
            <div className={styles['details-info']} id="detailsInfo">
               <div className={styles['info']}>
                  <img src={car.imageUrl} />
               </div>

               <div className={styles['info']}>
                  <h3>Manufacturer: {car.manufacturer}</h3>
                  <h3>Model: {car.model}</h3>
                  <h3>Year of Production: {car.year}</h3>
                  <h3>Description: {car.description}</h3>
                  <h2>Price: ${separateNumbers(car.price)}</h2>
               </div>

               
               <div className={styles['likes']}><h2>Likes: {likes.length}</h2></div>
               <div className={styles['buttons like-btn']}>
                  {isAuthenticated && !hasLiked && userId !== car._ownerId && (
                     <button
                        className={styles['button']}
                        onClick={likeButtonClickHandler}
                     >
                        Like
                     </button>
                  )}

                  {isAuthenticated && hasLiked && userId !== car._ownerId && (
                     <p className={styles['already-liked']}>Thank you for your like!</p>
                  )}

                  {isAuthenticated && userId === car._ownerId && (
                     <>
                        <Link
                           to={`/parts/create/${carId}`}
                           className={styles['button']}
                        >
                           Add parts
                        </Link>
                        <Link
                           to={`/cars/edit/${carId}`}
                           className={styles['button']}
                        >
                           Edit
                        </Link>
                        <button
                           className={styles['button']}
                           onClick={deleteButtonClickHandler}
                        >
                           Delete
                        </button>
                     </>
                  )}
               </div>
               {parts.length > 0 && (<Container>
                  <Row lg={3}>
                     {parts.map((part) => (
                        <PartItem key={part._id} {...part} />
                     ))}
                  </Row>
               </Container>)}
               {parts.length <= 0 && (<h3 className={styles['no-tune']}>This car has no tuning yet!</h3>)}
               </div>
         </section>
      </>
   );
};

export default Details;
