import React from "react";
import img from "./superdaddy.JPG";

import './superDaddy.scss';

const SuperDaddy = (props) => {
  return (
    <div className="superDaddycontainer">
      <div className="testWrapper">
        <h2>마인크래프트 좋아해...?</h2>
      </div>
      <div className="imgContainer">
        <img src={img} alt="superdaddy" onClick={()=>window.location.href="https://board.janmang2.com"}/>
      </div>
    </div>
  );
};

export default SuperDaddy;
