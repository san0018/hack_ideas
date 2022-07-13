import React, { createContext, useState, useContext } from "react";
import { authContext } from "./AuthProvider";

export const hackDataContext = createContext({});

const HackDataProvider = ({ children }) => {
  const [hackData, setHackData] = useState([]);
  const { auth } = useContext(authContext);

  const updateHackData = (data) => {
    let newHackData = [...hackData];
    newHackData.push(data);
    setHackData(newHackData);
    localStorage.setItem("hackData", JSON.stringify(newHackData));
  };

  const retrieveHackData = (hackDataList) => {
    setHackData(hackDataList);
  };

  const hasEmployeeUpVoted = (hackItem) => {
    const index = hackData.findIndex((item) => item.id === hackItem.id);
    if (hackData[index].upVotedBy.length === 0) {
      return false;
    } else {
      let filteredList = hackData[index].upVotedBy.filter((upVotedEmp) => {
        return upVotedEmp === auth.empId;
      });
      if (filteredList.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleUpVotePress = (hackItem) => {
    const index = hackData.findIndex((item) => item.id === hackItem.id);
    //if(hackData[index].upVotedBy )
    if (hasEmployeeUpVoted(hackItem)) {
      hackData[index].upVotedBy.splice(
        hackData[index].upVotedBy.indexOf(auth.empId),
        1
      );
      const newHackObj = {
        ...hackData[index],
        upVoteCount: hackData[index].upVoteCount - 1,
        upVotedBy: hackData[index].upVotedBy,
      };
      console.log("newhackObj", newHackObj);
      hackData[index] = newHackObj;
      setHackData([...hackData]);
      localStorage.setItem("hackData", JSON.stringify(hackData));
    } else {
      const newHackObj = {
        ...hackData[index],
        upVoteCount: hackData[index].upVoteCount + 1,
        upVotedBy: [...hackData[index].upVotedBy, auth.empId],
      };
      console.log("newhackObj", newHackObj);
      hackData[index] = newHackObj;
      setHackData([...hackData]);
      localStorage.setItem("hackData", JSON.stringify(hackData));
    }
  };

  return (
    <hackDataContext.Provider
      value={{
        hackData,
        updateHackData,
        retrieveHackData,
        handleUpVotePress,
        hasEmployeeUpVoted,
      }}
    >
      {children}
    </hackDataContext.Provider>
  );
};

export default HackDataProvider;
