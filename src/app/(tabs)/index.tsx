import * as React from "react";
import { ClassScheduleScreen } from "../../components/ClassSchedule/ClassScheduleScreen";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@/contexts/HeaderHeightContext";

// import { registerRootComponent } from "expo";

export default function App() {
  return <ClassScheduleScreen />;
}
