import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Settings from "./screens/Settings";

const Stack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const Tab = () => {
  return (
    <NavigationContainer>
      <TabStack.Navigator>
        <TabStack.Screen name="Home" component={Home} />
        <TabStack.Screen name="Settings" component={Settings} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
};
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" headerMode="none">
        <Stack.Screen name="Auth" component={Welcome} />
        <Stack.Screen name="Root" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
