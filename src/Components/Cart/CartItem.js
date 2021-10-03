import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { DeleteOutlined } from "@material-ui/icons";

import BeerName from "Components/Beer/BeerName";
import BeerImage from "Components/Beer/BeerImage";
import { requestDeleteCartItem } from "Modules/actions/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Item key={item.id}>
      <DeleteButton onClick={() => dispatch(requestDeleteCartItem(item.id))}>
        <DeleteOutlined alt="cart item delete button" />
      </DeleteButton>
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
  flex: 1;
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
const DeleteButton = styled.button`
  align-self: center;
  height: 100%;
  background-color: white;
  &:hover {
    & > svg {
      fill: tomato;
    }
  }
`;
