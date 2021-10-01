import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CartPriceTotal = ({ cartItems }) => {
  const calcTotalPrice = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price, 0);
  };
  return (
    <Wrapper>
      <span>Total {calcTotalPrice(cartItems).toLocaleString()} Won</span>
    </Wrapper>
  );
};

CartPriceTotal.propTypes = {
  cartItems: PropTypes.array,
};

export default CartPriceTotal;

const Wrapper = styled.div`
  position: relative;
  border-top: 1px solid gray;
  & > span {
    position: absolute;
    right: 0;
    font-size: 1.5em;
    padding: 10px 0px;
  }
`;
