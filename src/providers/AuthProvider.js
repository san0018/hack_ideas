import React, { createContext, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false, empId: null });

  const setAuthData = (data) => {
    setAuth({ isAuth: data.isAuth, empId: data.empId });
  };

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
