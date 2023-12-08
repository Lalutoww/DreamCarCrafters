import styles from './Details.module.css';

import { useState, useEffect, useContext } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import * as carService from '../../../../services/carService.js';
import * as partService from '../../../../services/partService.js';
import * as likeService from '../../../../services/likeService.js';
import AuthContext from '../../../../contexts/authContext.jsx';
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
            result.map((like) => {
               if (like.userId === userId) return setHasLiked(true);
            });
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
      const newState = [...likes, newLike];
      setLikes(newState);
      setHasLiked(true);
   };

   return (
      <>
         <div className="header">
            <h1>Details Page</h1>
         </div>
         <div className={styles['container']}>
            <img
               className={styles['detail-image']}
               src={car.imageUrl}
               alt="Car Image"
            />
            <h2 className={styles['carName']}>
               {car.manufacturer} {car.model} | Likes: {likes.length}
            </h2>
            <div className={styles['info']}>
               <p>
                  <strong>Owner:</strong> {car.ownerName}
               </p>
               <p>
                  <strong>Year:</strong> {car.year}
               </p>
               <p>
                  <strong>Color:</strong> {car.color}
               </p>
               <p>
                  <strong>Engine:</strong> {car.engine}
               </p>
               <p>
                  <strong>Horsepower:</strong> {car.horsepower} HP
               </p>
               <div className={styles['details-description']}>
                  <p>
                     <strong>Description:</strong>
                  </p>
                  <p>{car.description}</p>
               </div>
            </div>
            <div className={styles['button-container']}>
               {isAuthenticated && !hasLiked && userId !== car._ownerId && (
                  <button
                     className={styles['button']}
                     onClick={likeButtonClickHandler}
                  >
                     Like
                  </button>
               )}

               {isAuthenticated && hasLiked && userId !== car._ownerId && (
                  <p className={styles['already-liked']}>
                     Thank you for your like!
                  </p>
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
            <h3 className={styles['tuning-header']}>Tuning</h3>
            {parts.length > 0 && (
               <Container>
                  <Row lg={3}>
                     {parts.map((part) => (
                        <PartItem key={part._id} {...part} />
                     ))}
                  </Row>
               </Container>
            )}
            {parts.length <= 0 && (
               <h3 className={styles['no-tune']}>
                  This car has no tuning yet!
               </h3>
            )}
         </div>
      </>
   );
};

export default Details;
