import React, { useState } from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import Modal from "../components/Modal";

const Navigation: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>+</Button>
      {open ? <Modal closeModal={closeModal} /> : ""}
    </Box>
  );
};

export default Navigation;

const Box = styled.div``;

const Button = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  color: white;
  background-color: #004a7c;
`;
