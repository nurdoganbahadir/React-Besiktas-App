import React from "react";
import { data } from "../helper/data";

const PlayerCard = () => {
  return (
    <div className="row">
      <div className="col-12">
        {data.map((item) => {
          <div className="container">
            <img src={item.img} alt="" />
            <h2>{item.name}</h2>
          </div>;
        })}
      </div>
    </div>
  );
};

export default PlayerCard;
