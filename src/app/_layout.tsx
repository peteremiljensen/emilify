// Required for CSS to work on Expo Web.
import * as React from "react";
import "./strict.css";
// Required for Fast Refresh to work on Expo Web
import "@expo/metro-runtime";

import { Slot, Stack } from "expo-router";
import { PlatformShell } from "@/components/PlatformShell";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { colors } from "@/tokens.css";

export default function Layout() {
  return (
    <ThemeProvider
      value={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: colors.background },
      }}
    >
      <React.StrictMode>
        <PlatformShell>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </PlatformShell>
      </React.StrictMode>
    </ThemeProvider>
  );
}

//    <Stack>
//      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//    </Stack>
