import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CartItem } from "Components/Cart";

const CartList = ({ cartItems }) => {
  return (
    <List>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </List>
  );
};

CartList.propTypes = {
  cartItems: PropTypes.array,
};

export default React.memo(CartList);

const List = styled.ul`
  display: flex;
  flex-direction: column;
  & li + li {
    border-top: 1px solid gray;
  }
`;
