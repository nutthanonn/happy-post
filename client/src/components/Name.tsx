import React from "react";
import { FC } from "react";
import styled from "@emotion/styled";

const Name: FC = () => {
  const fname = "nutthanon";
  const lname = "thongcharoen";
  return (
    <Box>
      <H>
        {fname} {lname}
      </H>
    </Box>
  );
};

export default Name;

const Box = styled.div`
  display: flex;
`;

const H = styled.h1`
  color: #7c99ac;
  text-transform: uppercase;
  font-size: 5vw;
  margin: 0;
`;
