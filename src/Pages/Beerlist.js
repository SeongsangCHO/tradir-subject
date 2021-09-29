import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getBeers } from "Utils/api";
import { useDispatch } from "react-redux";
import { requestGetBeers } from "Modules/actions/beer";

const Beerlist = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestGetBeers());
  }, []);
  return <div>Beerlist page</div>;
};

Beerlist.propTypes = {};

export default Beerlist;
