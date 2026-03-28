import { navItems } from "@/data/mockData";
import { ScreenTrigger } from "expo-router/build/ui/common";
import {
  TabSlot,
  useTabsWithChildren,
  useTabsWithTriggers,
} from "expo-router/ui";
import { Button } from "./Button";
import { html, css } from "react-strict-dom";

export function Tabs() {
  const triggers: ScreenTrigger[] = navItems.map((n) => ({
    type: "internal",
    href: n.href,
    name: n.id,
  }));
  const children = navItems.map((n) => (
    <Button
      active={false}
      href={n.href}
      label={n.label}
      icon={n.icon}
      key={n.id}
    />
  ));

  const { NavigationContent } = useTabsWithTriggers({ triggers });

  return (
    <NavigationContent
      children={
        <>
          {/* <ScrollView style={styles.scroll}> */}
          <TabSlot />
          {/* </ScrollView> */}
          <html.nav style={styles.nav}>{children}</html.nav>
        </>
      }
    />
  );
}

const styles = css.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    // paddingBottom: 24,
    backgroundColor: "#131313FF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
