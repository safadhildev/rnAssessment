import React from "react";
import { View, Text, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Settings from "./screens/Settings";

const activeHome = require("../assets/shop.png");
const inactiveHome = require("../assets/shop_grey.png");
const activeSettings = require("../assets/user.png");
const inactiveSettings = require("../assets/user_grey.png");

const Stack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabStack.Navigator
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: "transparent",
        safeAreaInset: {
          bottom: "never",
        },
      }}
    >
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            checkPreviousScreen(navigation, defaultHandler);
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 30, height: 30 }}>
              <Image
                source={focused ? activeHome : inactiveHome}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <TabStack.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            checkPreviousScreen(navigation, defaultHandler);
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 30, height: 30 }}>
              <Image
                source={focused ? activeSettings : inactiveSettings}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
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
