const initState = {};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 1:
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
