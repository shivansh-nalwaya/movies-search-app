const INITIAL_STATE = {
  term: "",
  loading: false,
  results: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, term: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
