import React, { FC } from "react";
import styled from "@emotion/styled";
import calendar from "../assets/calendar.png";
import { device } from "../common/screensize";
import { DATE_OF_BIRTH, MONTH_OF_BIRTH } from "../config";

const BirthdayCalendar: FC = () => {
  return (
    <Box>
      <Calendar>
        <Month>{MONTH_OF_BIRTH}</Month>
        <Day>{DATE_OF_BIRTH}</Day>
      </Calendar>
    </Box>
  );
};

export default BirthdayCalendar;

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Calendar = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-image: url(${calendar});
  background-size: cover;
  object-fit: cover;
  @media screen and (${device.mobileL}) {
    width: 150px;
    height: 150px;
  }
`;

const Month = styled.h2`
  position: absolute;
  width: 155px;
  display: flex;
  justify-content: center;
  color: white;
  top: 23.5%;
  left: 23.5%;
  font-weight: 900;
  @media screen and (${device.mobileL}) {
    font-size: 10px;
    width: 80px;
  }
`;

const Day = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 100px;
  top: 32.5%;
  left: 23.5%;
  font-size: 3rem;
  @media screen and (${device.mobileL}) {
    height: 80px;
    top: 29%;
    width: 77px;
    height: 45px;
    font-size: 2rem;
  }
`;
