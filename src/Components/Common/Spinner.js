import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return <CommonSpinner></CommonSpinner>;
};

export default Spinner;

const CommonSpinner = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid rgba(60, 160, 232, 0.2);
  border-top: 3px solid ${({ theme }) => theme.colors.primaryDark};
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
