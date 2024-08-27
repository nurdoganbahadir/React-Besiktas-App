import React from "react";
import { data } from "../helper/data";

const PlayerCard = () => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 g-3">
          <div className="card-container" key={index}>
            <div className="img-div">
              <img src={item.img} alt={item.name} className="player-img" />
            </div>
            <h5>{item.name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
