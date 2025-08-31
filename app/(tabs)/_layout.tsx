import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: "#a855f7",
        },
        headerTintColor: "#fff",
        headerTitle: "Quiz for Developers",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Quizzes",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="lightbulb.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="theory"
        options={{
          title: "Theory",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="book.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="logical"
        options={{
          title: "Logical",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="brain.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tips"
        options={{
          title: "Tips",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="light.strip.2.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
