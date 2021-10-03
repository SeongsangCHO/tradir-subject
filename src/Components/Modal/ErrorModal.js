import React from "react";
import Portal from "Components/Modal/Portal";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorModal = (props) => {
  return (
    <Portal>
      <Wrapper>
        <span>Sorry, Please Try again</span>
        <Link to="/">Go home</Link>
      </Wrapper>
    </Portal>
  );
};

ErrorModal.propTypes = {};

export default ErrorModal;

const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  border-radius: 8px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  & > span {
    display: block;
    margin-bottom: 20px;
  }

  & > a {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    padding: 5px;
    color: white;
    border-radius: inherit;
  }
`;
