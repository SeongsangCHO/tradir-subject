import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestGetBeerList } from "Modules/actions/beer";
import { BeerTable } from "Components/Beer";
import Portal from "Components/Modal/Portal";
import { PageTemplate, Spinner } from "Components/Common";
import ErrorModal from "Components/Modal/ErrorModal";

const BeerList = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.beerReducer);
  useEffect(() => {
    dispatch(requestGetBeerList());
  }, []);

  const conditionRenderAboutStatus = () => {
    if (status === "loading") {
      return (
        <Portal>
          <Spinner />
        </Portal>
      );
    } else if (status === "failure") {
      return <ErrorModal />;
    }
  };
  return (
    <PageTemplate>
      <BeerTable />
      {conditionRenderAboutStatus()}
    </PageTemplate>
  );
};

export default BeerList;
