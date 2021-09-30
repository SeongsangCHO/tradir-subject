import { call, takeLatest, put } from "redux-saga/effects";

import { CART_ACTION_TYPES as T } from "Modules/actions/types";
import {
  successAddCartItem,
  failureAddCartItem,
  successDeleteCartItem,
  failureDeleteCartItem,
} from "Modules/actions/cart";

function* watchAddCartItem(action) {
  const { payload } = action;
  try {
    yield put(successAddCartItem(payload));
  } catch (error) {
    console.log(error);
    yield put(failureGetBeerList());
  }
}

function* watchDeleteCartItem(action) {
  if (res.status === 200) {
    yield put(successAddCartItem(data));
  } else {
    yield put(failureGetBeerList());
  }
}

function* cartSaga() {
  yield takeLatest(T.ADD_CART_ITEM_REQUEST, watchAddCartItem);
  yield takeLatest(T.DELETE_CART_ITEM_REQUEST, watchDeleteCartItem);
}

export default cartSaga;
