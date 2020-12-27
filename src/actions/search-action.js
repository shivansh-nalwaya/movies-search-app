import axios from "axios";

const Search = {
  updateTerm: (term) => ({ type: "UPDATE_TERM", payload: term }),
  search: () => {
    return function (dispatch, getState) {
      const state = getState();
      const { search } = state;
      const { term } = search;
      axios
        .get(`http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=${term}`)
        .then((response) => {
          dispatch({ type: "SEARCH", payload: response.data });
        });
    };
  },
};

export default Search;
