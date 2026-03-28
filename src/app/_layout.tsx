// Required for CSS to work on Expo Web.
import * as React from "react";
import "./strict.css";
// Required for Fast Refresh to work on Expo Web
import "@expo/metro-runtime";

import { Slot, Stack } from "expo-router";
import { PlatformShell } from "@/components/PlatformShell";

export default function Layout() {
  return (
    <React.StrictMode>
      <PlatformShell>
        <Stack />
      </PlatformShell>
    </React.StrictMode>
  );
}

//    <Stack>
//      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//    </Stack>
