import React from "react";
import PropTypes from "prop-types";
import Portal from "./Portal";
import styled from "styled-components";
import BeerImage from "Components/Beer/BeerImage";
import { CloseOutlined } from "@material-ui/icons";
import { BorderBottom } from "styles/Mixin";

const BeerDetailModal = ({ closeModal, item }) => {
  return (
    <Portal closeModal={closeModal}>
      <Container>
        <ModalBeerImage src={item.image_url} name={item.name} />
        <TitleText>{item.name}</TitleText>
        <DescriptionWrapper>
          <DescriptionText>{item.description}</DescriptionText>
        </DescriptionWrapper>
        <FoodPairingListWrapper>
          <span>With this foods</span>
          <ul>
            {item.food_pairing.map((food, idx) => (
              <li key={idx}>{food}</li>
            ))}
          </ul>
        </FoodPairingListWrapper>
        <CloseButton onClick={closeModal}>
          <CloseOutlined />
        </CloseButton>
      </Container>
    </Portal>
  );
};

BeerDetailModal.propTypes = {
  closeModal: PropTypes.func,
  item: PropTypes.object,
};

export default BeerDetailModal;
const FoodPairingListWrapper = styled.div`
  margin-top: 10px;
  & > span {
    position: relative;
    font-size: 1.5em;
    font-weight: bold;
    ${BorderBottom("5px", "primaryDark")}
  }
  & > ul {
    margin-top: 10px;
  }
`;
const DescriptionWrapper = styled.div`
  max-height: 150px;
  @media screen and (max-width: 768px) {
    overflow-y: scroll;
    max-height: 100px;
  }
`;
const DescriptionText = styled.span``;
const TitleText = styled.span`
  display: inline-block;
  width: fit-content;
  font-size: 2em;
  font-weight: bold;
  position: relative;
  ${BorderBottom("5px", "primaryDark")}
`;
const ModalBeerImage = styled(BeerImage)`
  align-self: center;
  max-width: 200px;
  max-height: 200px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 75vw;
  max-width: 640px;
  max-height: 720px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  background-color: white;
`;
