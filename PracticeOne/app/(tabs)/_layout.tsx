import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, Image } from "react-native";
import { icons } from "../../constants/icons";
import { COLORS } from "../../constants/colors";

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
        source={icons.tabIcon}
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
      source={icons.tabIcon2}
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
        
        tabBarStyle: {
          height: 100,
          paddingBottom: 20,
          backgroundColor: COLORS.background,
        },

        tabBarIcon: ({ focused }) => {
          return <TabIcon
            focused={focused}
          />
        },
        tabBarIconStyle: { 
          height: 20,
          width: 20,
          marginTop: 5,
          marginBottom: 5,
        },

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
          color: COLORS.text,
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