import { BEER_ACTION_TYPES as T } from "Modules/actions/types";

export const requestGetBeerList = () => {
  return {
    type: T.GET_BEERS_REQUEST,
  };
};

export const successGetBeerList = (data) => {
  return {
    type: T.GET_BEERS_SUCCESS,
    payload: data,
  };
};

export const failureGetBeerList = () => {
  return {
    type: T.GET_BEERS_FAILURE,
  };
};

export const setBeerListFilter = (data) => {
  return {
    type: T.SET_BEERS_FILTER,
    payload: data,
  };
};
