import React from "react";
import { data } from "../helper/data";

const PlayerCard = () => {
  return (
    <div className="row">
      <div className="col">
        {data.map((item, index) => (
          <div className="container" key={index}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
