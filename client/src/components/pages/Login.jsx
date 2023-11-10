import { useState } from 'react';
import styles from './Login.module.css';

const formInitialState = {
   email: '',
   password: '',
};

const Login = () => {
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
         <div className={styles['header']}><h1>Login</h1></div>
         <section className={styles['login-page']} id="loginPage">
            <form
               onSubmit={submitHandler}
               className={styles['login-form']}
               id="loginForm"
               action="#"
               method=""
            >
               <label htmlFor="email">Email:</label>
               <input
                  type="text"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={changeHandler}
                  placeholder="Email"
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

               <input type="submit" className={styles['register']} />
            </form>
         </section>
      </>
   );
};

export default Login;
