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
      <section>
        <CartList cartItems={cartItems} />
        <CartPriceTotal cartItems={cartItems} />
      </section>
    </CartViewPageTemplate>
  );
};

export default CartView;

const CartViewPageTemplate = styled(PageTemplate)`
  max-width: 480px;
  margin: 0 auto;
`;
