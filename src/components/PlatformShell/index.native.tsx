/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PlatformShell(props: React.PropsWithChildren<{}>) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>App Shell: Native ({Platform.OS})</Text>
        </View>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: "#e9f7fb",
    borderBottomWidth: 1,
    // borderBottomStyle: "solid",
    borderBottomColor: "#ccc",
    marginBottom: 16,
    paddingBlock: 8,
    paddingInline: 32,
  },
  heading: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "normal",
    margin: 0,
    padding: 0,
  },
});
