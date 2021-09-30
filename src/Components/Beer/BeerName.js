import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useModal from "Utils/hooks/useModal";
import BeerDetailModal from "Components/Modal/BeerDetailModal";

const BeerName = ({ item }) => {
  const { isShow, showModal, closeModal } = useModal();
  return (
    <>
      <Container onClick={showModal}>
        <Text>{item.name}</Text>
      </Container>
      {isShow && <BeerDetailModal item={item} closeModal={closeModal} />}
    </>
  );
};

BeerName.propTypes = {
  item: PropTypes.object,
};

export default BeerName;
const Container = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  text-align: center;
`;
const Text = styled.span`
  cursor: pointer;
  position: relative;
  font-size: 1em;
  color: white;
  font-weight: bold;
`;
