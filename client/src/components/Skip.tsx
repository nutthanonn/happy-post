import React, { FC } from "react";
import styled from "@emotion/styled";
import { device } from "../common/screensize";

const Skip: FC = () => {
  return (
    <div>
      <Text href="/post">Click to see all post</Text>
    </div>
  );
};

export default Skip;

const Text = styled.a`
  cursor: pointer;
  color: #92a9bd;
  position: relative;
  text-decoration: none;
  font-size: 2vw;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #7c99ac;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.5s ease;
  }
  &:hover::after {
    transform: scaleX(1);
    transition: transform 0.5s ease;
  }
  @media screen and (${device.mobileL}) {
    font-size: 4vw;
  }
`;
