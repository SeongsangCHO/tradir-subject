import { CART_ACTION_TYPES as T } from "Modules/actions/types";

const initState = {
  cartItems: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case T.ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
    case T.ADD_CART_ITEM_FAILURE:
      return { ...state };
    case T.DELETE_CART_ITEM_SUCCESS:
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    case T.DELETE_CART_ITEM_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
