import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const CartTitle = () => {
  return (
    <Title>
      <h1>🛒 Cart</h1>
    </Title>
  );
};

export default CartTitle;

const Title = styled.section`
  & > h1 {
    font-size: 2em;
    padding-bottom: 30px;
    border-bottom: 1px solid gray;
  }
`;
