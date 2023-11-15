import { useState, useEffect } from 'react';
import styles from './Register.module.css';

const formInitialState = {
   username: '',
   password: '',
   rePassword: '',
};

const Register = () => {
   const [formValues, setFormValues] = useState(formInitialState);

   const changeHandler = (e) => {
      const value = e.target.value;
      setFormValues((state) => ({
         ...state,
         [e.target.name]: value,
      }));
   };

   const submitHandler = (e) => {
      e.preventDefault();
      console.log(formValues);
      resetFormHandler();
   };

   const resetFormHandler = () => {
      setFormValues(formInitialState);
   };

   return (
      <>
      <div className={styles['header']}><h1>Register</h1></div>
         <section className={styles['register-page']} id="registerPage">
            <form
               onSubmit={submitHandler}
               className={styles['register-form']}
               id="registerForm"
               action="#"
               method=""
            >
               <label htmlFor="email">Email:</label>
               <input type="text" id="email" name="" placeholder="Email" />

               <label htmlFor="username">Username:</label>
               <input
                  type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  onChange={changeHandler}
                  placeholder="Enter your Username"
               />

               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={changeHandler}
                  placeholder="Password"
               />

               <label htmlFor="rePassword">Repeat Password:</label>
               <input
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  value={formValues.rePassword}
                  onChange={changeHandler}
                  placeholder="Repeat Password"
               />

               <input type="submit" className={styles.registerForm} />
            </form>
         </section>
      </>
   );
};

export default Register;
