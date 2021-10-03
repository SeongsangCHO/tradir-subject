import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { PageTemplate } from "Components/Common";
import { CartTitle, CartList, CartPriceTotal } from "Components/Cart";

const CartView = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <CartViewPageTemplate>
      <CartTitle />
      <CartListSection>
        <CartList cartItems={cartItems} />
      </CartListSection>
      <CartPriceTotal cartItems={cartItems} />
    </CartViewPageTemplate>
  );
};

export default CartView;

const CartViewPageTemplate = styled(PageTemplate)`
  max-width: 480px;
  max-height: 100vh;
  margin: 0 auto;
`;

const CartListSection = styled.section`
  max-height: 720px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    max-height: 480px;
  }
`;
