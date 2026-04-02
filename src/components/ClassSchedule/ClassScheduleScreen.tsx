import React, { useState } from "react";
import { html, css } from "react-strict-dom";
import { classes, featuredClass } from "@/data/mockData";
import { useClassSchedule } from "@/hooks/use-class-schedule";
import { DayFilter } from "./DayFilter";
import { ClassItem } from "./ClassItem";
import { FeaturedCard } from "./FeaturedCard";
import { ScrollView, View } from "react-native";
import { colors } from "@/tokens.css";
import { useHeaderHeight } from "@/contexts/HeaderHeightContext";
// import { BottomNav } from "./BottomNav";

const styles = css.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0e0e0e",
    minHeight: "100vh",
    width: "100vw",
  },
  scrollContent: (heroHeight: number) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: heroHeight + 20,
    paddingBottom: 100,
  }),
  heroSection: (headerHeight: number) => ({
    position: "absolute",
    width: "100%",
    // height: 100,
    zIndex: 99,
    // backgroundColor: "#0e0e0e",
    top: headerHeight + 10,
    overflow: "visible",
    paddingLeft: 0,
    paddingRight: 24,
  }),
  heroTitle: {
    fontFamily: "Space Grotesk",
    fontSize: 56,
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: -2,
    lineHeight: 0.9,
    marginBottom: 16,
  },
  classFeed: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 24,
    paddingRight: 24,
    gap: 48,
  },
  featuredWrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 48,
    marginBottom: 48,
  },
  bottomNavWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const ClassScheduleScreen: React.FC = () => {
  const { selectedDay, onDayPress, onBook, onReserve } = useClassSchedule();
  const { headerHeight } = useHeaderHeight();

  const firstHalf = classes.slice(0, 2);
  const secondHalf = classes.slice(2);

  const [heroHeight, setHeroHeight] = useState(0);
  console.log("heroHeight", heroHeight);

  return (
    // <ScrollView style={{ backgroundColor: colors.background }}>
    <>
      <html.section style={styles.heroSection(headerHeight)}>
        <View
          onLayout={(e) => {
            setHeroHeight(e.nativeEvent.layout.height);
          }}
        >
          <DayFilter selectedDay={selectedDay} onDayPress={onDayPress} />
        </View>
      </html.section>
      <ScrollView
        style={{ paddingTop: headerHeight + 20, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <html.div style={styles.screen}>
          <html.div style={styles.scrollContent(heroHeight)}>
            <html.div style={styles.classFeed}>
              {firstHalf.map((cls) => (
                <ClassItem key={cls.id} classData={cls} onBook={onBook} />
              ))}
            </html.div>

            <html.div style={styles.featuredWrapper}>
              <FeaturedCard data={featuredClass} onReserve={onReserve} />
            </html.div>

            <html.div style={styles.classFeed}>
              {secondHalf.map((cls) => (
                <ClassItem key={cls.id} classData={cls} onBook={onBook} />
              ))}
            </html.div>
          </html.div>

          {/* <html.div style={styles.bottomNavWrapper}> */}
          {/* <BottomNav onNavigate={onNavigate} /> */}
          {/* </html.div> */}
        </html.div>
      </ScrollView>
    </>
  );
};
