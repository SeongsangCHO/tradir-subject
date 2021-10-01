import { CART_ACTION_TYPES as T } from "Modules/actions/types";

export const requestAddCartItem = (data) => {
  return {
    type: T.ADD_CART_ITEM_REQUEST,
    payload: data,
  };
};

export const successAddCartItem = (data) => {
  return {
    type: T.ADD_CART_ITEM_SUCCESS,
    payload: data,
  };
};

export const failureAddCartItem = () => {
  return {
    type: T.ADD_CART_ITEM_FAILURE,
  };
};

export const requestDeleteCartItem = (id) => {
  return {
    type: T.DELETE_CART_ITEM_REQUEST,
    id,
  };
};

export const successDeleteCartItem = (id) => {
  return {
    type: T.DELETE_CART_ITEM_SUCCESS,
    id,
  };
};

export const failureDeleteCartItem = () => {
  return {
    type: T.DELETE_CART_ITEM_FAILURE,
  };
};
