import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import avatar from "../assets/avatar.png";
import axios from "axios";
import { keyframes } from "@emotion/react";

interface ModalProps {
  closeModal: () => void;
  openSnack: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  async function savePost(data: { title: string; detail: string }) {
    await axios.post("http://localhost:8080/post", JSON.stringify(data));
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      props.closeModal();
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (detail.length === 0) {
      setErr(true);
    } else {
      props.closeModal();
      props.openSnack();
      savePost({ title, detail });
      window.location.reload();
    }
  };

  return (
    <Box onClick={handleClick}>
      <Container>
        <form onSubmit={handleSubmit}>
          <BoxTitle>
            <Img src={avatar} />
            <InputCustom
              type="text"
              placeholder="Name or Unnamed"
              maxLength={20}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              value={title}
            />
          </BoxTitle>
          <TextareaCustom
            err={err}
            placeholder="Have a great time on your birthday...."
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDetail(e.target.value)
            }
            spellCheck={false}
            value={detail}
          />
          {err ? <Text>Type something</Text> : ""}
          <Button type="submit" onClick={handleSubmit}>
            Post
          </Button>
        </form>
      </Container>
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
  @media only screen and (max-width: 500px) {
    width: 300px;
    left: calc(50% - 300px / 2);
  }

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
  border: 1px solid
    ${(props: { err: boolean }) => (props.err ? "red" : "#f7ddde")};
  border-radius: 5px;
  padding: 0.5rem;
  background-color: #fcf5ee;
`;

const Text = styled.p`
  color: red;
  margin: -10px 0;
  font-size: 10px;
`;

const Button = styled.button`
  width: 80px;
  background-color: #8ed6ff;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  color: #61481c;
  position: relative;
  border: 2px solid rgb(0, 0, 0, 0.5);
`;
