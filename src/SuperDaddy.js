import React from "react";
import img from "./superdaddy.JPG";
import styled from "styled-components";

const SuperDaddy = (props) => {
  return (
    <imgCss>
      <h2>슈퍼데디 SuperDaddy는 누구인가...?</h2>
      <img className="scc-img" src={img} />
    </imgCss>
  );
};

const imgCss = styled.div`
  width: 50%;
  height: 50px;
  padding-bottom: 100px;
  margin: auto;
  backgroundcolor: red;
  & h2 {
    width: 100%;
    padding-bottom: 100px;
    alignself: center;
  }
`;

export default SuperDaddy;
