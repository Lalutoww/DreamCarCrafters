import styles from './Login.module.css';

import { useForm } from '../../../hooks/useForm.js';
import AuthContext from '../../../contexts/authContext.jsx';
import { useContext, useState } from 'react';

import ErrorAlert from '../../errorAlert/ErrorAlert.jsx'

const LoginFormKeys = {
   Email: 'email',
   Password: 'password',
};

const Login = () => {
   const { loginSubmitHandler, show, closeHandler } = useContext(AuthContext);
   const { formValues, onChangeHandler, onSubmit } = useForm(
      loginSubmitHandler,
      {
         [LoginFormKeys.Email]: '',
         [LoginFormKeys.Password]: '',
      }
   );
   return (
      <>
      {show && (<ErrorAlert closeHandler={closeHandler}/>)}
         <div className='header'>
            <h1>Login</h1>
         </div>
         <section className={styles['login-page']} id="loginPage">
            <form
               onSubmit={onSubmit}
               className={styles['login-form']}
               id="loginForm"
               method="POST"
            >
               <label htmlFor="email">Email:</label>
               <input
                  type="text"
                  id="email"
                  name={LoginFormKeys.Email}
                  value={formValues[LoginFormKeys.Email]}
                  onChange={onChangeHandler}
                  placeholder="Email"
               />

               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  name={LoginFormKeys.Password}
                  value={formValues[LoginFormKeys.Password]}
                  onChange={onChangeHandler}
                  placeholder="Password"
               />

               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default Login;
