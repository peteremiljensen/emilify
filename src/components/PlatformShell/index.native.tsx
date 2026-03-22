/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { colors } from "@/tokens";
import * as React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ClassSchedule/Header";

export function PlatformShell(props: React.PropsWithChildren<{}>) {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      {/* <SafeAreaProvider> */}
      {/* // <SafeAreaView style={styles.container} edges={["top", "bottom"]}> */}
      <Header />
      <ScrollView>{props.children}</ScrollView>
      {/* </SafeAreaView> */}
      {/* </SafeAreaProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
