import { call, takeLatest, put } from "redux-saga/effects";

import { BEER_ACTION_TYPES as T } from "Modules/actions/types";
import * as API from "Utils/api";
import { failureGetBeerList, successGetBeerList } from "Modules/actions/beer";

function* watchGetBeerList() {
  const res = yield call(API.getBeerList);

  if (res.status === 200) {
    yield put(successGetBeerList(res.data));
  } else {
    yield put(failureGetBeerList());
  }
}

function* beerSaga() {
  yield takeLatest(T.GET_BEERS_REQUEST, watchGetBeerList);
}

export default beerSaga;
