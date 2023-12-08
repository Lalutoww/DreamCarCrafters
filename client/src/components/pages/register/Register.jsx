import styles from './Register.module.css';

import { useContext } from 'react';
import { useForm } from '../../../hooks/useForm.js';

import AuthContext from '../../../contexts/authContext.jsx';

import ErrorAlert from '../../errorAlert/ErrorAlert.jsx';

const RegisterFormKeys = {
   Email: 'email',
   Username: 'username',
   Password: 'password',
   RePassword: 'rePassword',
};

const Register = () => {
   const { registerSubmitHandler, show, closeHandler } =
      useContext(AuthContext);
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
         {show && <ErrorAlert closeHandler={closeHandler} />}
         <div className="header">
            <h1>Register</h1>
         </div>
         <section className={styles['register-container']}>
            <form className={styles['register-form']} onSubmit={onSubmit}>
               <label htmlFor={RegisterFormKeys.Email}>Email</label>
               <input
                  type="email"
                  id={RegisterFormKeys.Email}
                  name={RegisterFormKeys.Email}
                  value={formValues[RegisterFormKeys.Email]}
                  onChange={onChangeHandler}
                  placeholder="Email"
                  autoComplete='on'
               />
               <label htmlFor={RegisterFormKeys.Username}>Username</label>
               <input
                  type="username"
                  id={RegisterFormKeys.Username}
                  name={RegisterFormKeys.Username}
                  value={formValues[RegisterFormKeys.Username]}
                  onChange={onChangeHandler}
                  placeholder="Username"
                  autoComplete='on'
               />
               <label htmlFor={RegisterFormKeys.Password}>Password</label>
               <input
                  type="password"
                  id={RegisterFormKeys.Password}
                  name={RegisterFormKeys.Password}
                  value={formValues[RegisterFormKeys.Password]}
                  onChange={onChangeHandler}
                  placeholder="Password"
                  autoComplete='off'
               />
               <label htmlFor={RegisterFormKeys.RePassword}>Repeat Password</label>
               <input
                  type="password"
                  id={RegisterFormKeys.RePassword}
                  name={RegisterFormKeys.RePassword}
                  value={formValues[RegisterFormKeys.RePassword]}
                  onChange={onChangeHandler}
                  placeholder="Repeat Password"
                  autoComplete='off'
               />
               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default Register;
