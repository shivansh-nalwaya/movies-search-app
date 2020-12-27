import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Pages from "./src/pages";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Pages />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
