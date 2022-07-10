import React, { createContext, useState } from "react";

export const hackDataContext = createContext({});

const HackDataProvider = ({ children }) => {
  const [hackData, setHackData] = useState([]);

  const updateHackData = (data) => {
    hackData.push(data);
    setHackData([...hackData]);
    localStorage.setItem("hackData", JSON.stringify(hackData));
  };

  return (
    <hackDataContext.Provider value={{ hackData, updateHackData }}>
      {children}
    </hackDataContext.Provider>
  );
};

export default HackDataProvider;
