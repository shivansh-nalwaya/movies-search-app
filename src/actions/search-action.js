import axios from "axios";
import _, { debounce } from "lodash";
import { AsyncStorage } from "react-native";

const nextPageDebounced = debounce(
  (dispatch, getState) => {
    const state = getState();
    const { search } = state;
    const { term, currentPage } = search;
    AsyncStorage.getItem("Watchlist").then((list) => {
      const watchlist = JSON.parse(list || "[]");
      axios
        .get(
          `http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=${term}&page=${
            currentPage + 1
          }`
        )
        .then((response) => {
          const results = _.map(response.data.Search, (movie) => {
            return {
              ...movie,
              watchlisted: _.includes(
                _.map(watchlist, (w) => w.imdbID),
                movie.imdbID
              ),
            };
          });
          dispatch({ type: "NEXT_PAGE", payload: { results } });
        });
    });
  },
  1000,
  { leading: true }
);

const Search = {
  updateTerm: (term) => ({ type: "UPDATE_TERM", payload: term }),
  search: () => {
    return function (dispatch, getState) {
      dispatch({ type: "SET_LOADING", payload: true });
      const state = getState();
      const { search } = state;
      const { term } = search;
      AsyncStorage.getItem("Watchlist").then((list) => {
        const watchlist = JSON.parse(list || "[]");
        axios
          .get(`http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&s=${term}`)
          .then((response) => {
            const results = _.map(response.data.Search, (movie) => {
              return {
                ...movie,
                watchlisted: _.includes(
                  _.map(watchlist, (w) => w.imdbID),
                  movie.imdbID
                ),
              };
            });
            const totalResults = response.data.totalResults;
            dispatch({ type: "SEARCH", payload: { results, totalResults } });
          });
      });
    };
  },
  nextPage: () => {
    return function (dispatch, getState) {
      dispatch({ type: "SET_LOADING_NEXT", payload: true });
      const state = getState();
      const { search } = state;
      const { currentPage, totalResults } = search;
      if (currentPage >= totalResults / 10)
        return dispatch({ type: "SET_LOADING_NEXT", payload: false });
      return nextPageDebounced(dispatch, getState);
    };
  },
};

export default Search;
