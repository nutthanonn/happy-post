import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Title from "../components/Title";
import { Player } from "@lottiefiles/react-lottie-player";
import Avatar from "../components/Avatar";
import Name from "../components/Name";
import Skip from "../components/Skip";

const Home: FC = () => {
  const [play, isPlay] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      isPlay(true);
    }, 2000);
  }, [play]);

  return (
    <Box>
      {play ? (
        <Content>
          <LottieAnimation
            src="https://assets7.lottiefiles.com/packages/lf20_3xwxlyv7.json"
            autoplay={play}
          />
          <Avatar />
          <Name />
        </Content>
      ) : (
        <Title />
      )}
      <Skip />
    </Box>
  );
};

export default Home;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const LottieAnimation = styled(Player)`
  position: fixed;
  top: 0;
  left: 30%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;
