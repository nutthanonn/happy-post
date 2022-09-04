import React, { FC } from "react";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.png";
import { keyframes } from "@emotion/react";
import Draggable from "react-draggable"; // The default

interface ModalProps {
  closeModal: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      props.closeModal();
    }
  };

  return (
    <Box onClick={handleClick}>
      <Draggable>
        <Container>
          <form action="">
            <BoxTitle>
              <Img src={avatar} />
              <InputCustom
                type="text"
                placeholder="Name or Unnamed"
                maxLength={20}
              />
            </BoxTitle>
            <TextareaCustom placeholder="Have a great time on your birthday...."></TextareaCustom>
            <Button>submit</Button>
          </form>
        </Container>
      </Draggable>
    </Box>
  );
};

export default Modal;

const openAnimation = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`;

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${openAnimation} 0.5s ease 1;
`;

const Container = styled.div`
  width: 500px;
  height: 340px;
  position: fixed;
  top: calc(50% - 340px / 2);
  left: calc(50% - 500px / 2);
  background-color: #ffc4d0;
  border-radius: 10px;
  border: 1px solid #ffc4d0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: move;

  > form {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 80%;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const InputCustom = styled.input`
  &:focus {
    outline: none;
    border: 1px solid #7c99ac;
  }
  border: 1px solid #f7ddde;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: #fcf5ee;
  flex-grow: 1;
`;

const TextareaCustom = styled.textarea`
  width: 97%;
  min-height: 60%;
  &:focus {
    outline: none;
    border: 1px solid #7c99ac;
  }
  resize: none;
  border: 1px solid #f7ddde;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: #fcf5ee;
`;

const Button = styled.button`
  width: 80px;
  background-color: #d3dedc;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
`;
