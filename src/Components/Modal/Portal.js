import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { createPortal } from "react-dom";
import ReactDOM from "react-dom";
const modalRoot = document.querySelector("#modal-root");

const Portal = ({ children, closeModal }) => {
  const close = (e) => {
    const { kind } = e.target.dataset;
    console.log(kind);

    if (kind === "dim") {
      closeModal();
      console.log("close");
    }
  };
  return ReactDOM.createPortal(
    <Dim data-kind="dim" onClick={close}>
      {children}
    </Dim>,
    modalRoot
  );
};

Portal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
};

export default Portal;

const Dim = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
