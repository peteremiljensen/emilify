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

export function PlatformShell(props: React.PropsWithChildren<{}>) {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.background} barStyle="default" />
      <SafeAreaView style={styles.container}>
        <ScrollView>{props.children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
