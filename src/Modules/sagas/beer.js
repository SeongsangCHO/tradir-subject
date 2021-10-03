import { call, takeLatest, put, delay } from "redux-saga/effects";

import { BEER_ACTION_TYPES as T } from "Modules/actions/types";
import * as API from "Utils/api";
import { failureGetBeerList, successGetBeerList } from "Modules/actions/beer";

function* watchGetBeerList() {
  const res = yield call(API.getBeerList);
  yield delay(500); //loading ui를 보여주기 위해 0.5s간 delay를 임시로 넣었습니다.

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
