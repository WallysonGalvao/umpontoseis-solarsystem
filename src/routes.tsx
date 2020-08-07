import React from "react";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from "./pages/Welcome";

import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Mars from "./pages/Mars";

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

const MarsPage = () => {
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#f0f0f5",
        },
      }}
    >
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="Mars" component={Mars} />
    </AppStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: "#FFF",
        style: {
          backgroundColor: "#151515",
          /* borderTopEndRadius: 16,
          borderTopLeftRadius: 16, */
          height: 55,
        },
        labelStyle: {
          margin: 5,
        },
      }}
    >
      <AppTab.Screen
        name="Início"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} style={{ top: 5 }} />
          ),
        }}
      />
      <AppTab.Screen
        name="Buscar"
        component={MarsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="search"
              color={color}
              size={size}
              style={{ top: 5 }}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Salvos"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="bookmark"
              color={color}
              size={size}
              style={{ top: 5 }}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Galeria"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="image"
              color={color}
              size={size}
              style={{ top: 5 }}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Homepage" component={BottomTabNavigator} />
        <AppStack.Screen name="Mars" component={Mars} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
