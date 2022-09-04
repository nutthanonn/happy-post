import React, { FC } from "react";
import styled from "@emotion/styled";
import { AiFillHome } from "react-icons/ai";
import { RiCakeFill } from "react-icons/ri";

interface BreadcrumbProps {
  icon?: string;
  path?: Array<string>;
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  return (
    <Box>
      <UlCustom>
        <LiCustom>
          <LinkCustom href="#">
            <RiCakeFill className="icon" />
            <span className="text">Post</span>
          </LinkCustom>
        </LiCustom>
        <LiCustom>
          <LinkCustom href={window.origin}>
            <AiFillHome className="icon" />
          </LinkCustom>
        </LiCustom>
      </UlCustom>
    </Box>
  );
};

export default Breadcrumb;

const Box = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
`;

const UlCustom = styled.ul`
  margin-left: 50px;
  display: inline-block;
  list-style: none;
`;

const LiCustom = styled.li`
  float: right;
  padding: 5px;
  background-color: #d3dedc;
  position: relative;
  margin-left: -50px;
  margin-top: 3px;
  border-radius: 50px;

  &:last-child > a {
    padding: 0;
  }
  &:last-child:hover > a {
    width: 50px;
    height: 50px;
    transform: scale(1.1);
  }
`;

const LinkCustom = styled.a`
  text-decoration: none;
  height: 50px;
  color: white;
  background-color: #65ba99;
  text-align: center;
  min-width: 50px;
  display: block;
  line-height: 50px;
  padding-left: 50px;
  padding-right: 20px;
  width: 50px;
  transition: all 0.2s ease;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  .icon {
    display: inline-block;
  }
  .text {
    display: none;
    opacity: 0;
  }
  &:hover {
    width: 100px;
    background-color: #77c2a5;
    .text {
      display: inline-block;
      opacity: 1;
    }
  }
`;
