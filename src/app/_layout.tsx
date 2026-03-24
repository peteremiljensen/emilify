// Required for CSS to work on Expo Web.
import { Header } from "@/components/Header";
import { StyleSheet } from "react-native";
import "./strict.css";
// Required for Fast Refresh to work on Expo Web
import "@expo/metro-runtime";

import { Slot, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PlatformShell } from "@/components/PlatformShell";

export default function Layout() {
  return (
    <PlatformShell>
      <Slot />
    </PlatformShell>
  );
}

//    <Stack>
//      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//    </Stack>
