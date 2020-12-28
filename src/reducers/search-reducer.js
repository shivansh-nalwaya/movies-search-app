const INITIAL_STATE = {
  term: "",
  loading: false,
  results: [],
  totalResults: 0,
  currentPage: 1,
  loadingNextPage: false,
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
        currentPage: 1,
      };
    case "SET_LOADING_NEXT":
      return { ...state, loadingNextPage: action.payload };
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        results: [...state.results, ...action.payload.results],
        loadingNextPage: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
