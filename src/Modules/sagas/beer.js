import { call, takeLatest, put } from "redux-saga/effects";

import { BEER_ACTION_TYPES as T } from "Modules/actions/types";
import * as API from "Utils/api";
import { failureGetBeers, successGetBeers } from "Modules/actions/beer";

function* watchGetBeers() {
  const res = yield call(API.getBeers);

  if (res.status === 200) {
    yield put(successGetBeers(res.data));
  } else {
    yield put(failureGetBeers());
  }
}

function* beerSaga() {
  yield takeLatest(T.GET_BEERS_REQUEST, watchGetBeers);
}

export default beerSaga;
