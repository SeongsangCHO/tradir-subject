import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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
