import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Pages from "./src/pages";

const App = () => {
  return (
    <NavigationContainer>
      <Pages />
    </NavigationContainer>
  );
};

export default App;
