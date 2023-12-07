import { createContext, useState, useEffect } from 'react';
import usePersistedState from '../hooks/usePersistedState.js';
import * as authService from '../services/authService.js';
import * as carService from '../services/carService.js';
import * as errorHandler from '../utils/errorHandler.js'
import { useNavigate } from 'react-router-dom';

import Path from '../paths.js';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const [auth, setAuth] = usePersistedState('auth', () => {
      localStorage.removeItem('accessToken');

      return {};
   });
   const [show, setShow] = useState(false);
   const [error, setError] = useState({});
   useEffect(() => {
      const timer = setTimeout(() => {
         setShow(false);
      }, 2000);
      return () => clearTimeout(timer);
   }, [show]);

   const closeHandler = () => {
      return setShow(false);
   };

   const loginSubmitHandler = async (values) => {
      try {
         const result = await authService.login(values.email, values.password);

         setAuth(result);
         localStorage.setItem('accessToken', result.accessToken);

         navigate(Path.Home);
      } catch (error) {
         setShow(true);
         setError({ ...error });
      }
   };

   const registerSubmitHandler = async (values) => {
      try {
         if (values.password !== values.rePassword)
            throw { message: `Passwords don't match` };
         const result = await authService.register(
            values.email,
            values.username,
            values.password
         );

         setAuth(result);
         localStorage.setItem('accessToken', result.accessToken);

         navigate(Path.Home);
      } catch (error) {
         setShow(true);
         setError({ ...error });
      }
   };

   const logoutHandler = () => {
      setAuth({});

      localStorage.removeItem('accessToken');
   };

   const listCarSubmitHandler = async (values) => {
      try {
         errorHandler.listCarErrorHandler(values);
         await carService.create(values);
         navigate('/cars/browse');
      } catch (error) {
         window.scrollTo(0, 0);
         setShow(true);
         setError({ ...error });
      }
   };

   const contextValues = {
      closeHandler,
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      listCarSubmitHandler,
      show,
      errorMsg: error.message,
      username: auth.username || auth.email,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.accessToken,
   };

   return (
      <AuthContext.Provider value={contextValues}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
