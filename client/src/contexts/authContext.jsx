import { createContext, useState, useEffect } from 'react';
import usePersistedState from '../hooks/usePersistedState.js';
import * as authService from '../services/authService.js';
import * as errorHandler from '../utils/errorHandler.js';
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
   const scrollToTopAndShowError = (error) => {
      window.scrollTo(0, 0);
      setShow(true);
      setError({ ...error });
   };

   const loginSubmitHandler = async (values) => {
      try {
         const result = await authService.login(values.email, values.password);

         setAuth(result);
         localStorage.setItem('accessToken', result.accessToken);

         navigate(Path.Home);
      } catch (error) {
         scrollToTopAndShowError(error);
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
         scrollToTopAndShowError(error);
      }
   };

   const logoutHandler = () => {
      setAuth({});

      localStorage.removeItem('accessToken');
   };

   const contextValues = {
      closeHandler,
      scrollToTopAndShowError,
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
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
