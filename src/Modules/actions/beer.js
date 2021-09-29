import { BEER_ACTION_TYPES } from "Modules/actions/types";

export const requestGetBeers = () => {
  return {
    type: BEER_ACTION_TYPES.GET_BEERS_REQUEST,
  };
};

export const successGetBeers = (data) => {
  return {
    type: BEER_ACTION_TYPES.GET_BEERS_SUCCESS,
    payload: data,
  };
};

export const failureGetBeers = () => {
  return {
    type: BEER_ACTION_TYPES.GET_BEERS_FAILURE,
  };
};
