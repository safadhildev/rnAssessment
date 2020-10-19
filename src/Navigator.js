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
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen name="Settings" component={Settings} />
    </TabStack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        headerMode="none"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
