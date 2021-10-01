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
    yield put(failureGetBeerList());
    console.error(error);
  }
}

function* watchDeleteCartItem(action) {
  const { id } = action;
  console.log(action, id);

  try {
    yield put(successDeleteCartItem(id));
  } catch (error) {
    yield put(failureDeleteCartItem());
    console.error(error);
  }
}

function* cartSaga() {
  yield takeLatest(T.ADD_CART_ITEM_REQUEST, watchAddCartItem);
  yield takeLatest(T.DELETE_CART_ITEM_REQUEST, watchDeleteCartItem);
}

export default cartSaga;
