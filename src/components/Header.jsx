import React from "react";
import nbaUrl from "../assets/nba-logo.png";


const Header = ({ onSearch }) => {
  return (
    <div className="container d-flex justify-content-center m-auto flex-column align-items-center gap-3 p-4">
      <img src={nbaUrl} alt="nba-logo" />
      <h1>NBA Legends</h1>
      <input
        type="search"
        name="search-player"
        id="search"
        className="form-control w-50"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
