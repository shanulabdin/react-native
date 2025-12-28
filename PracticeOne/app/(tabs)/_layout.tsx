import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: () => null,
        tabBarIconStyle: { 
          display: "none", 
          height: 0,
          width: 0
        },

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="Search"
        options={{ title: "Search" }}
      />
      <Tabs.Screen
        name="Profile"
        options={{ title: "Profile" }}
      />
      <Tabs.Screen
        name="Saved"
        options={{ title: "Saved" }}
      />
    </Tabs>
  );
}

export default _Layout;