import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { requestGetBeerList } from "Modules/actions/beer";
import BeerTable from "Components/Beer/BeerTable";

const BeerList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetBeerList());
  }, []);
  return (
    <div>
      Beerlist
      <BeerTable />
    </div>
  );
};

export default BeerList;
