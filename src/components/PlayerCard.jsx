import React from "react";


const PlayerCard = ({players}) => {
  return (
    <div className="row">
      {players.map((item, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 g-3" key={index}>
          <div className="card-container">
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
