import React, { FC } from "react";
import styled from "@emotion/styled";
import { TextAnimation } from "../common/textAnimation.common";

const Title: FC = () => {
  const Hap = "birthday ";

  return (
    <Box>
      <Content>
        {Array.from(Hap).map((item, index) => {
          return (
            <TextAnimation key={index} duration={index * 0.2}>
              <H1>{item}</H1>
            </TextAnimation>
          );
        })}
      </Content>
    </Box>
  );
};

export default Title;

const Box = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  padding: 0;
  overflow: hidden;
`;

const H1 = styled.h1`
  color: #7c99ac;
  text-transform: uppercase;
  font-size: 100px;
  margin: 0;
`;
