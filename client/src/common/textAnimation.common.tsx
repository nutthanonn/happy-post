import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const animation_text = keyframes`
  from{
    transform: translateY(30%) rotateX(90deg);
    opacity: 1;
  }
  to{
    transform: translateY(0) rotateX(0);
    opacity: .2;
  }
`;

export const TextAnimation = styled.div`
  animation: ${animation_text}
    ${(props: { duration: number }) => props.duration + "s"} ease 1;
`;
