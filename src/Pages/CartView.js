import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageTemplate } from "Components/Common";
import { CartTitle, CartList, CartPriceTotal } from "Components/Cart";

const CartView = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <CartViewPageTemplate>
      <CartTitle />
      <CartListSection>
        {cartItems.length === 0 && (
          <EmptyCartNotification>
            <Link to="/beerlist">👉 Let&apos;s get beers</Link>
          </EmptyCartNotification>
        )}
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
const EmptyCartNotification = styled.div`
  font-size: 1.5em;
  transition: 0.2s;
  padding: 10px 0px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.primaryInWhite};
  text-align: center;
  &:hover {
    font-size: 2em;
  }
  & > a {
    color: white;
  }
`;
