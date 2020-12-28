import React from "react";
import "react-native-gesture-handler";
import Home from "./home";
import Watchlist from "./watchlist";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Pages = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "md-home" : "md-home";
            } else if (route.name === "Watchlist") {
              iconName = focused ? "ios-list" : "ios-list";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#EF6553",
          inactiveTintColor: "gray",
          style: {
            height: 54,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Watchlist" component={Watchlist} />
      </Tab.Navigator>
    </>
  );
};

export default Pages;
