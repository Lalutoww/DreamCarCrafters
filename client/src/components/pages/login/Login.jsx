import styles from './Login.module.css';

import { useForm } from '../../../hooks/useForm.js';
import AuthContext from '../../../contexts/authContext.jsx';
import { useContext } from 'react';

import ErrorAlert from '../../errorAlert/ErrorAlert.jsx';

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
         {show && <ErrorAlert closeHandler={closeHandler} />}
         <div className="header">
            <h1>Login</h1>
         </div>
         <section className={styles['login-container']}>
            <form className={styles['login-form']} onSubmit={onSubmit}>
               <label htmlFor={LoginFormKeys.Email}>Email</label>
               <input
                  type="email"
                  id={LoginFormKeys.Email}
                  name={LoginFormKeys.Email}
                  value={formValues[LoginFormKeys.Email]}
                  onChange={onChangeHandler}
                  placeholder="Email"
                  autoComplete='on'
               />
               <label htmlFor={LoginFormKeys.Password}>Password</label>
               <input
                  type="password"
                  id={LoginFormKeys.Password}
                  name={LoginFormKeys.Password}
                  value={formValues[LoginFormKeys.Password]}
                  onChange={onChangeHandler}
                  placeholder="Password"
                  autoComplete='off'
               />

               <input type="submit" />
            </form>
         </section>
      </>
   );
};

export default Login;
