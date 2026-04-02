import { Header } from "@/components/Header";
import { navItems } from "@/data/mockData";
import { BlurTargetView, BlurView } from "expo-blur";
import { Href, usePathname, useRouter } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import {
  HeaderHeightProvider,
  useHeaderHeight,
} from "@/contexts/HeaderHeightContext";
import {
  HeaderContentProvider,
  useHeaderContent,
} from "@/contexts/HeaderContentContext";
import { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Screen } from "react-native-screens";
import { css, html } from "react-strict-dom";

function AnimatedTabScreen({
  children,
  isFocused,
}: {
  children: React.ReactNode;
  isFocused: boolean;
}) {
  const opacity = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isFocused ? 1 : 0,
      duration: 120,
      useNativeDriver: true,
    }).start();
  }, [isFocused, opacity]);

  return (
    <Animated.View style={[{ flex: 1, opacity }]}>{children}</Animated.View>
  );
}

export default function Layout() {
  return (
    <HeaderContentProvider>
      <HeaderHeightProvider>
        <TabsContent />
      </HeaderHeightProvider>
    </HeaderContentProvider>
  );
}

function TabsContent() {
  const insets = useSafeAreaInsets();
  const path = usePathname();
  const targetRef = useRef<View | null>(null);
  const { onHeaderLayout } = useHeaderHeight();
  const { headerContent } = useHeaderContent();

  return (
    <>
      <Tabs>
        <BlurTargetView ref={targetRef} style={styles2.background}>
          <TabSlot
            renderFn={(
              descriptor,
              { isFocused, loaded, detachInactiveScreens },
            ) => {
              const {
                lazy = true,
                unmountOnBlur,
                freezeOnBlur,
              } = descriptor.options;

              if (unmountOnBlur && !isFocused) return null;
              if (lazy && !loaded && !isFocused) return null;

              return (
                <Screen
                  key={descriptor.route.key}
                  enabled={detachInactiveScreens}
                  activityState={isFocused ? 2 : 0}
                  freezeOnBlur={freezeOnBlur}
                  style={[
                    styles2.screen,
                    isFocused ? styles2.focused : styles2.unfocused,
                  ]}
                >
                  <AnimatedTabScreen isFocused={isFocused}>
                    {descriptor.render()}
                  </AnimatedTabScreen>
                </Screen>
              );
            }}
          />
        </BlurTargetView>

        <BlurView
          onLayout={onHeaderLayout}
          blurTarget={targetRef}
          blurMethod="dimezisBlurView"
          intensity={100}
          style={styles2.blurContainerMenu}
          tint="dark"
        >
          <View>
            <html.div style={styles.headerWrapper(insets.top)}>
              <Header />
              {headerContent}
            </html.div>
          </View>
        </BlurView>

        <BlurView
          blurTarget={targetRef}
          blurMethod="dimezisBlurView"
          intensity={100}
          style={styles2.blurContainerTab}
          tint="dark"
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
  const scale = useRef(new Animated.Value(active ? 1 : 0.95)).current;
  const opacity = useRef(new Animated.Value(active ? 1 : 0.6)).current;
  const bgOpacity = useRef(new Animated.Value(active ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: active ? 1 : 0.95,
        friction: 6,
        tension: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: active ? 1 : 0.6,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(bgOpacity, {
        toValue: active ? 1 : 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [active, scale, opacity, bgOpacity]);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <AnimatedPressable
      onPress={() => push(href)}
      style={[styles2.navItemBase, { transform: [{ scale }], opacity }]}
    >
      <Animated.View style={[styles2.navItemBg, { opacity: bgOpacity }]} />
      <View style={styles2.navItemContent}>
        <html.span style={[styles.navIcon, active && styles.navIconActive]}>
          {icon}
        </html.span>
        <html.span style={[styles.navLabel, active && styles.navLabelActive]}>
          {label}
        </html.span>
      </View>
    </AnimatedPressable>
  );
};

const styles2 = StyleSheet.create({
  background: {
    flex: 1,
    flexWrap: "wrap",
    ...StyleSheet.absoluteFill,
  },
  blurContainerMenu: {
    position: "absolute",
    zIndex: 99,
    // height: 2000,
    width: "100%",

    top: 0,
    overflow: "hidden",
  },
  blurContainerTab: {
    position: "absolute",
    zIndex: 1,
    // height: 200,
    width: "100%",
    bottom: 0,
    borderRadius: 24,
    overflow: "hidden",
  },
  screen: {
    flex: 1,
    position: "relative",
    height: "100%",
    width: "100%",
  },
  focused: {
    zIndex: 1,
    display: "flex",
    flexShrink: 0,
    flexGrow: 1,
  },
  unfocused: {
    zIndex: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  navItemBase: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  navItemBg: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    backgroundColor: "#95aaff",
    borderRadius: 9999,
    shadowColor: "#95aaff",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.6,
    // shadowRadius: 10,
  },
  navItemContent: {
    zIndex: 1,
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
  // tabSlotWrapper: {
  //   top: 0,
  //   zIndex: 0,
  //   width: "100vw",
  //   height: "100vh",
  //   // position: "absolute",
  // },
  headerWrapper: (insetTop: number) => ({
    paddingTop: insetTop,
    // backgroundColor: "#0e0e0eb3",
  }),
  nav: (insetBottom: number) => ({
    // backgroundColor: "#131313cc",
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
    paddingBottom: insetBottom - 10,
    paddingTop: insetBottom - 10,
    // paddingTop: paddingBottom,
  }),
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
