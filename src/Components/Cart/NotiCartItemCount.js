import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NotiCartItemCount = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <CircleWrapper>
      <span>{cartItems.length}</span>
    </CircleWrapper>
  );
};

export default NotiCartItemCount;

const CircleWrapper = styled.div`
  padding: 2px;
  position: absolute;
  font-size: 14px;
  top: -1em;
  right: -1.5em;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background-color: red;
  color: white;
  text-align: center;
  & > span {
    line-height: 18px;
  }
`;
