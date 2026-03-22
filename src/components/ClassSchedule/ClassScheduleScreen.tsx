import React from "react";
import { html, css } from "react-strict-dom";
import { classes, featuredClass } from "@/data/mockData";
import { useClassSchedule } from "@/hooks/use-class-schedule";
import { Header } from "./Header";
import { DayFilter } from "./DayFilter";
import { ClassItem } from "./ClassItem";
import { FeaturedCard } from "./FeaturedCard";
import { BottomNav } from "./BottomNav";

const styles = css.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0e0e0e",
    minHeight: "100vh",
  },
  scrollContent: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 100,
  },
  heroSection: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 48,
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
  const { selectedDay, onDayPress, onBook, onReserve, onNavigate } =
    useClassSchedule();

  const firstHalf = classes.slice(0, 2);
  const secondHalf = classes.slice(2);

  return (
    <html.div style={styles.screen}>
      <Header />
      <html.div style={styles.scrollContent}>
        <html.section style={styles.heroSection}>
          <html.h1 style={styles.heroTitle}>{"Push Your\nLimits."}</html.h1>
          <DayFilter selectedDay={selectedDay} onDayPress={onDayPress} />
        </html.section>

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

      <html.div style={styles.bottomNavWrapper}>
        <BottomNav onNavigate={onNavigate} />
      </html.div>
    </html.div>
  );
};
