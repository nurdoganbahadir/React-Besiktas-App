import React from "react";
import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";

const CardContainer = ({searchTerm}) => {
  const filteredPlayers = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container nba">
      <div>
        <PlayerCard players={filteredPlayers} />
      </div>
    </div>
  );
};

export default CardContainer;
