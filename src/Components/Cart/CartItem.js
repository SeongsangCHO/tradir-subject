import React from "react";
import PropTypes from "prop-types";
import BeerName from "Components/Beer/BeerName";
import BeerImage from "Components/Beer/BeerImage";
import styled from "styled-components";

const CartItem = ({ item }) => {
  return (
    <Item key={item.id}>
      <CartImageWrapper>
        <CartBeerImage src={item.image_url} name={item.name} />
      </CartImageWrapper>
      <CartBeerInfoContainer>
        <CartBeerName item={item} />
        <CartBeerPrice>{item.price.toLocaleString()} Won</CartBeerPrice>
      </CartBeerInfoContainer>
    </Item>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;

const Item = styled.li`
  display: flex;
  padding: 10px 0px;
`;

const CartBeerImage = styled(BeerImage)`
  max-width: 150px;
  max-height: 150px;
`;

const CartBeerName = styled(BeerName)`
  & > span {
    background-color: white;
    color: black;
  }
`;

const CartBeerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
`;

const CartBeerPrice = styled.span`
  margin-top: 5px;
  font-weight: bold;
`;
