import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BeerImage = (props) => {
  const { src, name } = props;
  return <Wrapper alt={name + " beer image"} src={src}></Wrapper>;
};

BeerImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BeerImage;

const Wrapper = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
