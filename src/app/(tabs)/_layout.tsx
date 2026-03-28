import { Header } from "@/components/Header";
import { html, css } from "react-strict-dom";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  useTabsWithTriggers,
} from "expo-router/ui";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  PressableProps,
  Pressable,
} from "react-native";
import { colors } from "../../tokens.css";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Href,
  useNavigation,
  usePathname,
  useRootNavigationState,
  useRouter,
} from "expo-router";
import { navItems } from "@/data/mockData";

export default function Layout() {
  const insets = useSafeAreaInsets();
  const path = usePathname();
  // console.log(path);
  return (
    <>
      <Header />
      <Tabs>
        <TabSlot />
        <html.nav style={styles.nav}>
          {navItems.map(({ id, icon, label, href }) => (
            <Button
              key={id}
              label={label}
              icon={icon}
              href={href}
              active={href === path}
            />
          ))}
        </html.nav>
        <TabList>
          {navItems.map(({ href, id }) => (
            <TabTrigger key={id} name={id} href={href} />
          ))}
        </TabList>
      </Tabs>
      <View
        style={{ ...styles2.safeAreaBlockBottom, paddingBottom: insets.bottom }}
      ></View>
    </>
  );
}

interface ButtonProps {
  label: string;
  icon: string;
  active: boolean;
  href: Href;
}
const Button: React.FC<ButtonProps> = ({ icon, href, label, active }) => {
  const { push } = useRouter();
  return (
    <html.button
      style={[styles.navItem, active && styles.navItemActive]}
      onClick={() => {
        console.log("onClick", href);
        push(href);
      }}
    >
      <html.span style={[styles.navIcon, active && styles.navIconActive]}>
        {icon === "grid_view"
          ? "⊞"
          : icon === "fitness_center"
            ? "🏋️"
            : icon === "style"
              ? "🎴"
              : "👤"}
      </html.span>
      <html.span style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </html.span>
    </html.button>
  );
};

const styles = css.create({
  scroll: {
    backgroundColor: colors.background,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 20,
    // paddingBottom: 8,
    backgroundColor: "#131313FF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    opacity: 0.6,
  },
  navItemActive: {
    backgroundColor: "#95aaff",
    borderRadius: 9999,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    opacity: 1,
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 4,
    color: "#71717a",
  },
  navIconActive: {
    color: "#0e0e0e",
  },
  navLabel: {
    fontFamily: "Space Grotesk",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#71717a",
  },
  navLabelActive: {
    color: "#0e0e0e",
  },
});

const styles2 = StyleSheet.create({
  tablist: {
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
  safeAreaBlockBottom: {
    backgroundColor: "#131313",
  },
});
