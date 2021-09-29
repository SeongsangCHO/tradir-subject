import { BEER_ACTION_TYPES } from "Modules/actions/types";

export const requestGetBeerList = () => {
  return {
    type: BEER_ACTION_TYPES.GET_BEERS_REQUEST,
  };
};

export const successGetBeerList = (data) => {
  return {
    type: BEER_ACTION_TYPES.GET_BEERS_SUCCESS,
    payload: data,
  };
};

export const failureGetBeerList = () => {
  return {
    type: BEER_ACTION_TYPES.GET_BEERS_FAILURE,
  };
};
