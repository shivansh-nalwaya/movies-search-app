import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import searchReducer from "./search-reducer";
import watchlistReducer from "./watchlist-reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  watchlist: watchlistReducer,
});

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
