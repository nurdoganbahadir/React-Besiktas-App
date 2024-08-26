import React from "react";
import bgimg from "../assets/nba-bg.jpg";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <div className="container nba">
      <div className="img-div">
        <img src={bgimg} alt="nba" className="nba-bg" />
        <PlayerCard />
      </div>
    </div>
  );
};

export default CardContainer;
