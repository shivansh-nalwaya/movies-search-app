const INITIAL_STATE = {
  term: "",
  loading: false,
  results: [],
  totalResults: 0,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "UPDATE_TERM":
      return { ...state, term: action.payload };
    case "SEARCH":
      return {
        ...state,
        results: action.payload.results,
        totalResults: action.payload.totalResults,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
