const INITIAL_STATE = {
  term: "",
  loading: false,
  results: [],
  totalResults: 0,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_TERM":
      return { ...state, term: action.payload };
    case "SEARCH":
      return {
        ...state,
        results: action.payload.Search,
        totalResults: action.payload.totalResults,
      };
    default:
      return state;
  }
};

export default searchReducer;
