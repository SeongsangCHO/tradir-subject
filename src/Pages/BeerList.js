import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { requestGetBeerList } from "Modules/actions/beer";
import BeerTable from "Components/Beer/BeerTable";
import PageTemplate from "Components/Common/PageTemplate";

const BeerList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetBeerList());
  }, []);
  return (
    <PageTemplate>
      Beerlist
      <BeerTable />
    </PageTemplate>
  );
};

export default BeerList;
