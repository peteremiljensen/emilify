import { Header } from "@/components/Header";
import { navItems } from "@/data/mockData";
import { BlurTargetView, BlurView } from "expo-blur";
import { Href, usePathname, useRouter } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { css, html } from "react-strict-dom";
import { Text, StyleSheet, View } from "react-native";
import { useRef } from "react";

export default function Layout() {
  const insets = useSafeAreaInsets();
  const path = usePathname();
  const targetRef = useRef<View | null>(null);
  // console.log(path);
  return (
    <>
      <Header />
      <Tabs>
        <BlurTargetView ref={targetRef} style={styles2.background}>
          <TabSlot />
        </BlurTargetView>
        <BlurView
          blurTarget={targetRef}
          blurMethod="dimezisBlurView"
          intensity={100}
          style={styles2.blurContainer}
        >
          <View>
            <html.nav style={styles.nav(insets.bottom)}>
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
          </View>
        </BlurView>
        <TabList>
          {navItems.map(({ href, id }) => (
            <TabTrigger key={id} name={id} href={href} />
          ))}
        </TabList>
      </Tabs>
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
      onClick={() => push(href)}
    >
      <html.span style={[styles.navIcon, active && styles.navIconActive]}>
        {icon}
      </html.span>
      <html.span style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </html.span>
    </html.button>
  );
};

const styles2 = StyleSheet.create({
  background: {
    flex: 1,
    flexWrap: "wrap",
    ...StyleSheet.absoluteFill,
  },
  blurContainer: {
    position: "absolute",
    zIndex: 1,
    // height: 200,
    width: "100%",
    bottom: 0,
    borderRadius: 24,
    overflow: "hidden",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});

const styles = css.create({
  // navWrapper: {
  //       posi
  //   },
  nav: (paddingBottom: number) => ({
    backgroundColor: "#131313cc",
    display: "flex",
    // position: "absolute",
    // bottom: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 99,
    // paddingBottom: 8,
    // paddingBottom,
    textAlign: "center",
    // paddingLeft: 8,
    // paddingRight: 8,
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingBottom: paddingBottom - 10,
    paddingTop: paddingBottom - 10,
    // paddingTop: paddingBottom,
  }),
  navItem: {
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 0.6,
  },
  navItemActive: {
    backgroundColor: "#95aaff",
    borderRadius: 9999,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1,
    boxShadow: "0 0 50px -11px #95aaff",
  },
  navIcon: {
    zIndex: 99,
    fontSize: 22,
    fontFamily: "Material Symbols",
    fontWeight: 400,
    marginBottom: 4,
    color: "#71717a",
  },
  navIconActive: {
    color: "#0e0e0e",
  },
  navLabel: {
    zIndex: 99,
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
