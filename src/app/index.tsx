// Required for CSS to work on Expo Web.
import "./strict.css";
// Required for Fast Refresh to work on Expo Web
import "@expo/metro-runtime";
import * as React from "react";
import { ClassScheduleScreen } from "../components/ClassSchedule/ClassScheduleScreen";
import { PlatformShell } from "@/components/PlatformShell/index.native";

// import { registerRootComponent } from "expo";

import { LogBox } from "react-native";

if (LogBox != null) {
  LogBox.ignoreLogs([
    // /React Strict DOM: .*/,
    // /Failed prop type: .*/,
  ]);
}

export default function App() {
  return (
    <React.StrictMode>
      <PlatformShell>
        <ClassScheduleScreen />
      </PlatformShell>
    </React.StrictMode>
  );
}
