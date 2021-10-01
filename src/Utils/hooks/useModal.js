import React, { useState } from "react";

const useModal = (props) => {
  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };
  return { isShow, setIsShow, showModal, closeModal };
};

export default useModal;
