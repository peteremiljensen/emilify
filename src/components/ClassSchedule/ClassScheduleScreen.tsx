import React, { useEffect, useState } from "react";
import { html, css } from "react-strict-dom";
import { classes, featuredClass } from "@/data/mockData";
import { useClassSchedule } from "@/hooks/use-class-schedule";
import { DayFilter } from "./DayFilter";
import { ClassItem } from "./ClassItem";
import { FeaturedCard } from "./FeaturedCard";
import { ScrollView, View } from "react-native";
import { colors } from "@/tokens.css";
import { useHeaderHeight } from "@/contexts/HeaderHeightContext";
import { useHeaderContent } from "@/contexts/HeaderContentContext";
import { useIsFocused } from "@react-navigation/native";
// import { BottomNav } from "./BottomNav";

const styles = css.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0e0e0e",
    minHeight: "100vh",
    width: "100vw",
  },
  scrollContent: {
    display: "flex",
    flexDirection: "column",
    // marginTop: 20,
    paddingBottom: 10,
  },
  heroContent: {
    backgroundColor: "#0e0e0eb3",
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
  },
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
  const { setHeaderContent } = useHeaderContent();
  const isFocused = useIsFocused();

  const firstHalf = classes.slice(0, 2);
  const secondHalf = classes.slice(2);

  useEffect(() => {
    if (isFocused) {
      setHeaderContent(
        <html.section style={styles.heroContent}>
          <DayFilter selectedDay={selectedDay} onDayPress={onDayPress} />
        </html.section>,
      );
    } else {
      setHeaderContent(null);
    }
    return () => setHeaderContent(null);
  }, [isFocused, selectedDay, onDayPress, setHeaderContent]);

  return (
    // <ScrollView style={{ backgroundColor: colors.background }}>
    <>
      <ScrollView
        style={{ paddingTop: headerHeight + 20, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <html.div style={styles.screen}>
          <html.div style={styles.scrollContent}>
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
