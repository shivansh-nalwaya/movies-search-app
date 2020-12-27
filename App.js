import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Pages from "./src/pages";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Pages />
    </NavigationContainer>
  );
};

export default App;
