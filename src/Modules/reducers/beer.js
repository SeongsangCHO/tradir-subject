import { BEER_ACTION_TYPES as T } from "Modules/actions/types";
import { STATUS } from "Utils/constant";

const initState = {
  beerList: [],
  status: STATUS.loading,
};

const beerReducer = (state = initState, action) => {
  switch (action.type) {
    case T.GET_BEERS_REQUEST:
      return {
        ...state,
        status: STATUS.loading,
      };
    case T.GET_BEERS_SUCCESS:
      return {
        ...state,
        beerList: action.payload,
        status: STATUS.success,
      };
    case T.GET_BEERS_FAILURE:
      return {
        ...state,
        status: STATUS.failure,
      };
    default:
      return state;
  }
};

export default beerReducer;
