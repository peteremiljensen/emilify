// Required for CSS to work on Expo Web.
import App from "@/components/App";
import "./strict.css";
// Required for Fast Refresh to work on Expo Web
import "@expo/metro-runtime";

import { registerRootComponent } from "expo";

import { LogBox } from "react-native";

if (LogBox != null) {
  LogBox.ignoreLogs([
    // /React Strict DOM: .*/,
    // /Failed prop type: .*/,
  ]);
}

registerRootComponent(App);
