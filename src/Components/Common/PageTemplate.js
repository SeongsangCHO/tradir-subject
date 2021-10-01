import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const PageTemplate = ({ children, ...restParams }) => {
  return <Template {...restParams}>{children}</Template>;
};

PageTemplate.propTypes = {
  children: PropTypes.node,
};

export default PageTemplate;

const Template = styled.main`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 50px 30px;
`;
