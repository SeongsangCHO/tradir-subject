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
  top: -0.8em;
  right: -1.1em;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: red;
  color: white;
  text-align: center;
  & > span {
    line-height: 20px;
  }
`;
