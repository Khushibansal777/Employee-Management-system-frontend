import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(getLocalStorage());
  //localStorage.clear();
  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    //console.log("ye data auth provider m h", employees);
    // setUserData({ employees, admin });
    setUserData((prevUserData) => ({
      ...prevUserData, // Preserve other data
      employees,
      admin,
    }));
  }, []);

  const updateUserData = (newData) => {
    setUserData(newData);
    setLocalStorage(newData); // Ensure local storage is updated
  };

  return (
    <div>
      <AuthContext.Provider value={{ userData, updateUserData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
