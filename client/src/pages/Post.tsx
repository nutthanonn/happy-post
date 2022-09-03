import React, { FC } from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import Navigation from "../share/Navigation";

const Post: FC = () => {
  return (
    <Box>
      <Navigation />
      <Contaienr>
        <Card
          detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem."
        />
        <Card
          detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci quam molestias voluptatibus laboriosam totam illum
      animi assumenda ex tempora, vero repellendus veniam voluptates est
      sapiente exercitationem."
        />
        <Card
          detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit,
      libero quasi adipisci"
        />
      </Contaienr>
    </Box>
  );
};

export default Post;

const Box = styled.div`
  min-height: 100vh;
  background-color: #d3dedc;
  display: flex;
  justify-content: center;
`;

const Contaienr = styled.div`
  padding: 5rem;
  display: flex;
  flex-shrink: inherit;
  flex-direction: column;
  gap: 2rem;
`;
