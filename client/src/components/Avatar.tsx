import { FC } from "react";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.png";
import hat from "../assets/party-hat.png";
import { keyframes } from "@emotion/react";

const Avatar: FC = () => {
  return (
    <Box>
      <Img src={avatar} />
      <Hat src={hat} />
    </Box>
  );
};

export default Avatar;

const hatAnimation = keyframes`
  0%{
    transform: scale(0) rotate(30deg);
  }
  75%{
    transform: scale(1.2) rotate(30deg);
  }
  to{
    transform: scale(1) rotate(30deg);
  }
`;

const Box = styled.div`
  position: relative;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Hat = styled.img`
  position: absolute;
  right: -20px;
  top: -55px;
  transform: rotate(30deg);
  width: 80px;
  animation: ${hatAnimation} 0.5s ease 1;
`;
