import React, { useContext } from "react";
import { hackDataContext } from "../../providers/HackDataProvider";
import HackListItem from "../HackListItem/HackListItem";
import "./HackList.css";

const HackList = () => {
  const { hackData } = useContext(hackDataContext);
  return (
    <div className="listContainer">
      <ul className="ulStyle">
        {hackData.map((hackIdea, index) => {
          return (
            <li key={hackIdea.id} className="listItemStyle">
              <HackListItem hackItem={hackIdea} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HackList;
