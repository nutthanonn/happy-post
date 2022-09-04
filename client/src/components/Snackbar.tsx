import React, { FC } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Snackbar: FC = () => {
  return <Box>Post has been save</Box>;
};

export default Snackbar;

const animationIn = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    20%{
        transform: translateY(0);
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

const Box = styled.div`
  position: fixed;
  width: 200px;
  background-color: white;
  border-left: 5px solid rgba(124, 252, 0, 0.5);
  padding: 2px 1rem;
  top: 20px;
  right: 50px;
  border-radius: 5px;
  animation: ${animationIn} 5s ease 1;
`;
