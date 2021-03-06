import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import useModal from "Utils/hooks/useModal";
import BeerDetailModal from "Components/Modal/BeerDetailModal";

const BeerName = ({ item }) => {
  const { isShow, showModal, closeModal } = useModal();
  return (
    <>
      <Container onClick={showModal}>{item.name}</Container>
      {isShow && <BeerDetailModal item={item} closeModal={closeModal} />}
    </>
  );
};

BeerName.propTypes = {
  item: PropTypes.object,
};

export default BeerName;
const Container = styled.button`
  padding: 5px;
  border-radius: 8px;
  text-align: center;
  text-overflow: ellipsis;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primaryInWhite};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
