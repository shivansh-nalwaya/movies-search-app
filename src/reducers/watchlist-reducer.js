import _ from "lodash";

const INITIAL_STATE = {
  loading: false,
  list: [],
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LOADING_WATCHLIST":
      return { ...state, loading: action.payload };
    case "LOAD_WATCHLIST":
      return { ...state, list: action.payload, loading: false };
    case "ADD_TO_WATCHLIST":
      return { ...state, list: [...state.list, action.payload] };
    case "REMOVE_FROM_WATCHLIST":
      return { ...state, list: _.without(state.list, action.payload) };
    default:
      return state;
  }
};

export default watchlistReducer;
