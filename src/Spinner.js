import React from "react";
import styled from "styled-components";
import { Eco } from "@material-ui/icons";

import img from "./scc_img01.png";

const Spinner = (props) => {
  return (
    <Outter>
      <Eco styled={{ fontSize: "150px", color: "#673ab7" }} />
      {/* <img src={img} /> */}
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #df402c88;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 150px;
  }
`;
export default Spinner;
