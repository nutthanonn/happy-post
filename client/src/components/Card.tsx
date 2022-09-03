import React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { randomProfile } from "../helper/random_profile";
import cake from "../assets/birthday-cake.png";

interface CardProps {
  name?: string;
  time?: Date;
  detail: string;
}

const Card: FC<CardProps> = (props) => {
  return (
    <Box>
      <CardHeader>
        <CardAvatar src={randomProfile()} />
        <CardTitle>
          <CardName>From Nutthanon</CardName>
          <CardTime>3 Sept 2022</CardTime>
        </CardTitle>
        <CardIcon src={cake} />
      </CardHeader>
      <Text>{props.detail}</Text>
    </Box>
  );
};

export default Card;

const Box = styled.div`
  display: block;
  width: 500px;
  height: auto;

  padding: 2rem;
  border-radius: 10px;
  background-color: #ffefef;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Text = styled.p`
  color: #7c99ac;
`;

const CardHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
`;

const CardIcon = styled.img`
  position: absolute;
  top: -10px;
  right: 0;
  width: 20px;
`;

const CardTitle = styled.div``;

const CardName = styled.p`
  margin: 0;
  padding: 0;
`;

const CardTime = styled.p`
  margin: 0;
  padding: 0;
  color: #7c99ac;
  font-size: 10px;
`;

const CardAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
