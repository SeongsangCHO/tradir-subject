import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BeerImage = ({ src, name, ...restParams }) => {
  return <Image alt={name + " beer image"} src={src} {...restParams}></Image>;
};

BeerImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BeerImage;

const Image = styled.img`
  max-width: 75px;
  max-height: 75px;
`;
