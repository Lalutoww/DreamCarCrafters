import styles from './Register.module.css';

import { useContext } from 'react';
import { useForm } from '../../../hooks/useForm.js';

import AuthContext from '../../../contexts/authContext.jsx';

const RegisterFormKeys = {
   Email: 'email',
   Username: 'username',
   Password: 'password',
   RePassword: 'rePassword',
};

const Register = () => {
   const { registerSubmitHandler } = useContext(AuthContext);
   const { formValues, onChangeHandler, onSubmit } = useForm(
      registerSubmitHandler,
      {
         [RegisterFormKeys.Email]: '',
         [RegisterFormKeys.Username]: '',
         [RegisterFormKeys.Password]: '',
         [RegisterFormKeys.RePassword]: '',
      }
   );

   return (
      <>
         <div className={styles['header']}>
            <h1>Register</h1>
         </div>
         <section className={styles['register-page']} id="registerPage">
            <form
               onSubmit={onSubmit}
               className={styles['register-form']}
               id="registerForm"
               action="#"
               method=""
            >
               <label htmlFor="email">Email:</label>
               <input
                  type="text"
                  id="email"
                  name={RegisterFormKeys.Email}
                  value={formValues[RegisterFormKeys.Email]}
                  onChange={onChangeHandler}
                  placeholder="Email"
               />

               <label htmlFor="username">Username:</label>
               <input
                  type="text"
                  id="username"
                  name={RegisterFormKeys.Username}
                  value={formValues[RegisterFormKeys.Username]}
                  onChange={onChangeHandler}
                  placeholder="Username"
               />

               <label htmlFor="password">Password:</label>
               <input
                  type="password"
                  id="password"
                  name={RegisterFormKeys.Password}
                  value={formValues[RegisterFormKeys.Password]}
                  onChange={onChangeHandler}
                  placeholder="Password"
               />

               <label htmlFor="rePassword">Repeat Password:</label>
               <input
                  type="password"
                  id="rePassword"
                  name={RegisterFormKeys.RePassword}
                  value={formValues[RegisterFormKeys.RePassword]}
                  onChange={onChangeHandler}
                  placeholder="Repeat Password"
               />

               <input type="submit" className={styles.registerForm} />
            </form>
         </section>
      </>
   );
};

export default Register;
