import _ from "lodash";
import { AsyncStorage } from "react-native";

const Search = {
  addToWatchlist: (movie) => {
    return function (dispatch, getState) {
      const state = getState();
      console.log(state);
      const { watchlist } = state;
      const { list } = watchlist;
      AsyncStorage.setItem("Watchlist", JSON.stringify([...list, movie]));
      dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
    };
  },
  removeFromWatchlist: (movie) => {
    return function (dispatch, getState) {
      const state = getState();
      console.log(state);
      const { watchlist } = state;
      const { list } = watchlist;
      AsyncStorage.setItem(
        "Watchlist",
        JSON.stringify(_.filter(list, (m) => m.imdbID != movie.imdbID))
      );
      dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie });
    };
  },
  loadWatchlist: () => {
    return function (dispatch) {
      AsyncStorage.getItem("Watchlist").then((res) => {
        dispatch({ type: "LOAD_WATCHLIST", payload: JSON.parse(res || "[]") });
      });
    };
  },
};

export default Search;
