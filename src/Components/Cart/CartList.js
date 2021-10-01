import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartList = ({ cartItems }) => {
  return (
    <List>
      {cartItems.length === 0 && (
        <EmptyCartNotification>
          <Link to="/beerlist">Let&apos;s get beers 👉</Link>
        </EmptyCartNotification>
      )}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </List>
  );
};

CartList.propTypes = {
  cartItems: PropTypes.array,
};

export default CartList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  & li + li {
    border-top: 1px solid gray;
  }
`;

const EmptyCartNotification = styled.h1`
  font-size: 1.5em;
  transition: 0.2s;
  padding: 10px 10px;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    font-size: 2em;
  }
`;
