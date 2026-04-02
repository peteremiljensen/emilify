import React, { useEffect } from "react";
import { html, css } from "react-strict-dom";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@/contexts/HeaderHeightContext";
import { useHeaderContent } from "@/contexts/HeaderContentContext";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "@/tokens.css";

const scheduleItems = [
  {
    id: "1",
    time: "18:30",
    duration: "60 MIN",
    name: "Advanced Boxing",
    instructor: "Coach Sarah",
  },
  {
    id: "2",
    time: "07:00",
    duration: "45 MIN",
    name: "Power Lifting",
    instructor: "Coach Marcus",
  },
] as const;

const styles = css.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0e0e0e",
    minHeight: "100vh",
    width: "100vw",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 40,
    gap: 48,
  },

  // Hero Greeting
  greetingSection: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  greetingLabel: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    color: "#95aaff",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  greetingTitle: {
    fontFamily: "Space Grotesk",
    fontSize: 44,
    fontWeight: "900",
    color: "#ffffff",
    letterSpacing: -2,
    lineHeight: 1,
  },

  // Stats Grid
  statsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  statsRow: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },

  // Weekly Workouts Card (full width)
  weeklyCard: {
    backgroundColor: "#131313",
    borderRadius: 12,
    padding: 24,
    position: "relative",
    overflow: "hidden",
    height: 176,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  weeklyLabel: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    color: "#adaaaa",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  weeklyValueRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    marginTop: 8,
  },
  weeklyValueBig: {
    fontFamily: "Space Grotesk",
    fontSize: 56,
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: 1,
  },
  weeklyValueSmall: {
    fontFamily: "Space Grotesk",
    fontSize: 24,
    fontWeight: "700",
    color: "#adaaaa",
  },
  weeklyProgressTrack: {
    height: 8,
    backgroundColor: "#262626",
    borderRadius: 9999,
    marginTop: 16,
    overflow: "hidden",
  },
  weeklyProgressFill: {
    height: 8,
    backgroundColor: "#95aaff",
    borderRadius: 9999,
    width: "80%" as `${number}%`,
  },
  weeklyIcon: {
    position: "absolute",
    right: -16,
    bottom: -16,
    fontFamily: "Material Symbols",
    fontWeight: 400,
    fontSize: 120,
    color: "#ffffff",
    opacity: 0.1,
  },

  // Small Stat Cards
  statCard: {
    flex: 1,
    backgroundColor: "#20201f",
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 160,
  },
  statLabel: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    color: "#adaaaa",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  statValueContainer: {
    display: "flex",
    flexDirection: "column",
  },
  caloriesValue: {
    fontFamily: "Space Grotesk",
    fontSize: 28,
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: 1,
  },
  caloriesSubtext: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "700",
    color: "#ff7439",
    textTransform: "uppercase",
    letterSpacing: -0.5,
    fontStyle: "italic",
    marginTop: 4,
  },
  goalRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  goalValue: {
    fontFamily: "Space Grotesk",
    fontSize: 36,
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: 1,
  },
  goalIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(149, 170, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  goalIcon: {
    fontFamily: "Material Symbols",
    fontWeight: 400,
    fontSize: 18,
    color: "#95aaff",
  },
  statCardRelative: {
    position: "relative",
  },
  goalDot: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff7439",
  },

  // Schedule Section
  scheduleSection: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  scheduleHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  scheduleTitle: {
    fontFamily: "Space Grotesk",
    fontSize: 28,
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
  viewAllButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(149, 170, 255, 0.3)",
    padding: 0,
    paddingBottom: 4,
  },
  viewAllText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "700",
    color: "#95aaff",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  scheduleList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  // Schedule Card
  scheduleCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
    paddingBottom: 16,
  },
  scheduleTimeCol: {
    width: 80,
    display: "flex",
    flexDirection: "column",
  },
  scheduleTime: {
    fontFamily: "Space Grotesk",
    fontSize: 20,
    fontWeight: "700",
    color: "#95aaff",
    letterSpacing: -1,
    lineHeight: 1,
  },
  scheduleDuration: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    color: "#adaaaa",
    textTransform: "uppercase",
    letterSpacing: 3,
    marginTop: 4,
  },
  scheduleInfoCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  scheduleClassName: {
    fontFamily: "Space Grotesk",
    fontSize: 20,
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: -0.5,
    lineHeight: 1,
    marginBottom: 4,
  },
  scheduleInstructor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  scheduleInstructorIcon: {
    fontFamily: "Material Symbols",
    fontWeight: 400,
    fontSize: 14,
    color: "#adaaaa",
  },
  scheduleInstructorText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    color: "#adaaaa",
    textTransform: "uppercase",
  },
  scheduleChevron: {
    fontFamily: "Material Symbols",
    fontWeight: 400,
    fontSize: 24,
    color: "rgba(173, 170, 170, 0.3)",
  },

  // CTA Section
  ctaCard: {
    backgroundColor: "#ff7439",
    borderRadius: 16,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
  },
  ctaTitle: {
    fontFamily: "Space Grotesk",
    fontSize: 28,
    fontWeight: "900",
    color: "#3f1100",
    textTransform: "uppercase",
    letterSpacing: -1,
    lineHeight: 1,
  },
  ctaDescription: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "rgba(63, 17, 0, 0.8)",
    lineHeight: 1.4,
    maxWidth: "80%",
  },
  ctaButton: {
    backgroundColor: "#262626",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 9999,
    borderWidth: 0,
    marginTop: 8,
  },
  ctaButtonText: {
    fontFamily: "Space Grotesk",
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
});

export const HomeDashboardScreen: React.FC = () => {
  const { headerHeight } = useHeaderHeight();
  const { setHeaderContent } = useHeaderContent();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setHeaderContent(null);
    }
    return () => setHeaderContent(null);
  }, [isFocused, setHeaderContent]);

  return (
    <ScrollView
      style={{ paddingTop: headerHeight + 20, width: "100%" }}
      showsVerticalScrollIndicator={false}
    >
      <html.div style={styles.screen}>
        <html.div style={styles.content}>
          {/* Hero Greeting */}
          <html.section style={styles.greetingSection}>
            <html.span style={styles.greetingLabel}>Ready to push?</html.span>
            <html.h1 style={styles.greetingTitle}>
              Welcome back, Alex.
            </html.h1>
          </html.section>

          {/* Stats Bento Grid */}
          <html.section style={styles.statsGrid}>
            {/* Weekly Workouts - Full Width */}
            <html.div style={styles.weeklyCard}>
              <html.div>
                <html.span style={styles.weeklyLabel}>Weekly Workouts</html.span>
                <html.div style={styles.weeklyValueRow}>
                  <html.span style={styles.weeklyValueBig}>4</html.span>
                  <html.span style={styles.weeklyValueSmall}>/ 5</html.span>
                </html.div>
              </html.div>
              <html.div style={styles.weeklyProgressTrack}>
                <html.div style={styles.weeklyProgressFill} />
              </html.div>
              <html.span style={styles.weeklyIcon}>fitness_center</html.span>
            </html.div>

            {/* Two small stat cards */}
            <html.div style={styles.statsRow}>
              {/* Calories Burned */}
              <html.div style={styles.statCard}>
                <html.span style={styles.statLabel}>Calories Burned</html.span>
                <html.div style={styles.statValueContainer}>
                  <html.span style={styles.caloriesValue}>2,450</html.span>
                  <html.span style={styles.caloriesSubtext}>
                    kcal this week
                  </html.span>
                </html.div>
              </html.div>

              {/* Goal Progress */}
              <html.div style={[styles.statCard, styles.statCardRelative]}>
                <html.span style={styles.statLabel}>Goal Progress</html.span>
                <html.div style={styles.goalRow}>
                  <html.span style={styles.goalValue}>85%</html.span>
                  <html.div style={styles.goalIconCircle}>
                    <html.span style={styles.goalIcon}>trending_up</html.span>
                  </html.div>
                </html.div>
                <html.div style={styles.goalDot} />
              </html.div>
            </html.div>
          </html.section>

          {/* Your Schedule */}
          <html.section style={styles.scheduleSection}>
            <html.div style={styles.scheduleHeader}>
              <html.h2 style={styles.scheduleTitle}>Your Schedule</html.h2>
              <html.button style={styles.viewAllButton}>
                <html.span style={styles.viewAllText}>View All</html.span>
              </html.button>
            </html.div>

            <html.div style={styles.scheduleList}>
              {scheduleItems.map((item) => (
                <html.div key={item.id} style={styles.scheduleCard}>
                  <html.div style={styles.scheduleTimeCol}>
                    <html.span style={styles.scheduleTime}>{item.time}</html.span>
                    <html.span style={styles.scheduleDuration}>
                      {item.duration}
                    </html.span>
                  </html.div>
                  <html.div style={styles.scheduleInfoCol}>
                    <html.h3 style={styles.scheduleClassName}>
                      {item.name}
                    </html.h3>
                    <html.div style={styles.scheduleInstructor}>
                      <html.span style={styles.scheduleInstructorIcon}>
                        person
                      </html.span>
                      <html.span style={styles.scheduleInstructorText}>
                        {item.instructor}
                      </html.span>
                    </html.div>
                  </html.div>
                  <html.span style={styles.scheduleChevron}>
                    chevron_right
                  </html.span>
                </html.div>
              ))}
            </html.div>
          </html.section>

          {/* Upgrade CTA */}
          <html.section style={styles.ctaCard}>
            <html.h2 style={styles.ctaTitle}>
              Upgrade to Kinetic Plus
            </html.h2>
            <html.p style={styles.ctaDescription}>
              Get unlimited access to recovery zones and nutrition tracking.
            </html.p>
            <html.button style={styles.ctaButton}>
              <html.span style={styles.ctaButtonText}>Go Pro</html.span>
            </html.button>
          </html.section>
        </html.div>
      </html.div>
    </ScrollView>
  );
};
