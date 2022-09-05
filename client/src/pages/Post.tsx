import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Card from "../components/Card";
import Navigation from "../share/Navigation";
import Breadcrumb from "../share/Breadcrumb";
import axios from "axios";

interface PostData {
  title: string;
  detail: string;
  create_at: string;
}

const Post: FC = () => {
  const [data, setData] = useState<Array<PostData> | null>(null);

  useEffect(() => {
    async function fetch() {
      const res = await axios.get("http://localhost:8080/post");
      setData(res.data.data);
    }
    fetch();
  }, []);

  return (
    <Box>
      <Breadcrumb />
      <Navigation />
      <Contaienr>
        {data &&
          data.map((item, index) => {
            return (
              <Card
                detail={item.detail}
                time={item.create_at}
                title={item.title}
                key={index}
              />
            );
          })}

        {data && <div></div>}
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
