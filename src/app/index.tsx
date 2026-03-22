// Required for CSS to work on Expo Web.
import "./strict.css";
// Required for Fast Refresh to work on Expo Web
import "@expo/metro-runtime";

import * as React from "react";
import { html } from "react-strict-dom";
import { LogBox } from "react-native";
import { PlatformShell } from "../components/PlatformShell";

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
        <html.p>Hello</html.p>
      </PlatformShell>
    </React.StrictMode>
  );
}
