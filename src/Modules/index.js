import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { beerReducer, cartReducer, beerTableReducer } from "./reducers";
import beerSaga from "./sagas/beer";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  beerReducer,
  cartReducer,
  beerTableReducer,
});

export default rootReducer;

//wathcer saga
export function* rootSaga() {
  yield all([beerSaga()]);
}
