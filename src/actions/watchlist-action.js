import _ from "lodash";
import { AsyncStorage } from "react-native";

const Search = {
  addToWatchlist: (id) => {
    return function (dispatch, getState) {
      const state = getState();
      console.log(state);
      const { watchlist } = state;
      const { list } = watchlist;
      AsyncStorage.setItem("Watchlist", JSON.stringify([...list, id]));
      dispatch({ type: "ADD_TO_WATCHLIST", payload: id });
    };
  },
  removeFromWatchlist: (id) => {
    return function (dispatch, getState) {
      const state = getState();
      console.log(state);
      const { watchlist } = state;
      const { list } = watchlist;
      AsyncStorage.setItem("Watchlist", JSON.stringify(_.without(list, id)));
      dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
    };
  },
  loadWatchlist: () => {
    return function (dispatch) {
      AsyncStorage.getItem("Watchlist").then((res) => {
        dispatch({ type: "LOAD_WATCHLIST", payload: JSON.parse(res) });
      });
    };
  },
};

export default Search;
