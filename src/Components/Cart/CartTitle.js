import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CartTitle = (props) => {
  return (
    <Title>
      <h1>Cart</h1>
    </Title>
  );
};

CartTitle.propTypes = {};

export default CartTitle;

const Title = styled.section`
  & > h1 {
    font-size: 2em;
    padding-bottom: 30px;
    border-bottom: 1px solid gray;
  }
`;
