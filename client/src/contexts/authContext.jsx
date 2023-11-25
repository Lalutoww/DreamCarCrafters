import { createContext, useState } from 'react';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({});

   const loginSubmitHandler = (values) => {
      //
   };


   const contextValues = {
    loginSubmitHandler,
   }

   return (
      <AuthContext.Provider value={contextValues}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
