import * as React from "react";
import { ClassScheduleScreen } from "../../components/ClassSchedule/ClassScheduleScreen";
import { PlatformShell } from "@/components/PlatformShell/index.native";
import { Stack } from "expo-router";

// import { registerRootComponent } from "expo";

export default function App() {
  return (
    <React.StrictMode>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <PlatformShell> */}
      {/* <ClassScheduleScreen /> */}
      {/* </PlatformShell> */}
    </React.StrictMode>
  );
}
