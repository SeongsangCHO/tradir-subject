import React from "react";
import PropTypes from "prop-types";
import CartList from "Components/Cart/CartList";
import PageTemplate from "Components/Common/PageTemplate";
import CartTitle from "Components/Cart/CartTitle";
import { useSelector } from "react-redux";
import CartPriceTotal from "Components/Cart/CartPriceTotal";
import styled from "styled-components";

const CartView = (props) => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <CartViewPageTemplate>
      <CartTitle />
      <section>
        <CartList cartItems={cartItems} />
        <CartPriceTotal cartItems={cartItems} />
      </section>
    </CartViewPageTemplate>
  );
};

CartView.propTypes = {};

export default CartView;

const CartViewPageTemplate = styled(PageTemplate)`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;
