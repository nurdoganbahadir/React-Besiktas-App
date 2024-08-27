import React, { useState } from "react";
import { FaBasketball } from "react-icons/fa6";

const PlayerCard = ({ players }) => {
  const [info, setInfo] = useState(Array(players.length).fill(false));

  const toggleStats = (index) => {
    const newInfo = [...info];
    newInfo[index] = !newInfo[index];
    setInfo(newInfo);
  };
  return (
    <div className="row">
      {players.map((item, index) => (
        <div
          className="col-xl-3 col-lg-4 col-md-6 g-3"
          key={index}
          onClick={() => toggleStats(index)}
        >
          <div className="card-container">
            <div className="img-div">
              <img src={item.img} alt={item.name} className="player-img" />
            </div>
            <h5>{item.name}</h5>
            {info[index] && (
              <div className="statistick">
                {item.statistics.map((stat, statIndex) => (
                  <p key={statIndex} className="statistics">
                    <FaBasketball /> {stat}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
