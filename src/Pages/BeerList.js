import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestGetBeerList } from "Modules/actions/beer";
import { BeerTable } from "Components/Beer";
import Portal from "Components/Modal/Portal";
import { PageTemplate, Spinner } from "Components/Common";

const BeerList = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.beerReducer);
  useEffect(() => {
    dispatch(requestGetBeerList());
  }, []);
  return (
    <PageTemplate>
      <BeerTable />
      {status === "loading" && (
        <Portal>
          <Spinner />
        </Portal>
      )}
    </PageTemplate>
  );
};

export default BeerList;
