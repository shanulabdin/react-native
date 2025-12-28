import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { Image } from "react-native";

const TabIcon = ({ focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        style={{
          width: 24,
          height: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../../constants/img.png")}
      >
        <Image
          style={{ width: 20, height: 20 }}
        />
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      style={{
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
      source={require("../../constants/img2.png")}
    >
      <Image
        style={{ width: 20, height: 20 }}
      />
    </ImageBackground>
  );
}

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused }) => {
          return <TabIcon
            focused={focused}
          />
        },
        // tabBarIconStyle: { 
        //   display: "none", 
        //   height: 0,
        //   width: 0
        // },

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