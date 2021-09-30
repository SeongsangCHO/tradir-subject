import React from "react";
import PropTypes from "prop-types";
import Portal from "./Portal";
import styled from "styled-components";
const BeerDetailModal = ({ closeModal, item }) => {
  return (
    <Portal closeModal={closeModal}>
      <Container>{item.name}</Container>
    </Portal>
  );
};

BeerDetailModal.propTypes = {
  closeModal: PropTypes.func,
  item: PropTypes.object,
};

export default BeerDetailModal;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 20px;
`;
