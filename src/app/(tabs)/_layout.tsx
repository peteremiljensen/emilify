import { Header } from "@/components/Header";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { StyleSheet, ScrollView, Text } from "react-native";
import { colors } from "@/tokens";

export default function Layout() {
  return (
    <>
      <Header />
      <Tabs>
        <ScrollView style={styles.scroll}>
          <TabSlot />
        </ScrollView>
        <TabList>
          <TabTrigger name="home" href="/">
            <Text style={{ color: "white" }}>Home</Text>
          </TabTrigger>
          <TabTrigger name="article" href="/settings">
            <Text>Article</Text>
          </TabTrigger>
        </TabList>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.background,
  },
});
