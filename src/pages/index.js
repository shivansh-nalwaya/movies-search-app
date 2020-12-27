import React from "react";
import "react-native-gesture-handler";
import Home from "./home";
import Watchlist from "./watchlist";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Pages = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Watchlist" component={Watchlist} />
      </Tab.Navigator>
    </>
  );
};

export default Pages;
