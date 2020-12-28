import axios from "axios";
import _ from "lodash";
import { AsyncStorage } from "react-native";

const Search = {
  updateTerm: (term) => ({ type: "UPDATE_TERM", payload: term }),
  search: () => {
    return function (dispatch, getState) {
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
                watchlisted: _.includes(watchlist, movie.imdbID),
              };
            });
            const totalResults = response.data.totalResults;
            dispatch({ type: "SEARCH", payload: { results, totalResults } });
          });
      });
    };
  },
};

export default Search;
