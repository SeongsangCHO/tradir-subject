import React, { useState } from "react";

const useModal = (props) => {
  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
    console.log("show Modal");
  };
  const closeModal = () => {
    setIsShow(false);
    console.log("close Modal");
  };
  return { isShow, setIsShow, showModal, closeModal };
};

export default useModal;
