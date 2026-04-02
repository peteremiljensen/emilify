import React from "react";
import { html, css } from "react-strict-dom";
import { dayFilters } from "@/data/mockData";
import { ScrollView } from "react-native";

interface DayFilterProps {
  readonly selectedDay: string;
  readonly onDayPress: (day: string) => void;
}

const styles = css.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  pill: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 9999,
    borderWidth: 0,
    backgroundColor: {
      default: "#20201f",
      ":hover": "#484847",
    },
  },
  pillActive: {
    backgroundColor: {
      default: "#95aaff",
      ":hover": "#95aaff",
    },
  },
  pillInner: {
    gap: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dayLabel: {
    fontFamily: "Space Grotesk",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#adaaaa",
    opacity: 0.7,
  },
  dayLabelActive: {
    color: "#000000",
  },
  dateNumber: {
    lineHeight: 1,
    fontFamily: "Space Grotesk",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#adaaaa",
  },
  dateNumberActive: {
    color: "#000000",
  },
});

export const DayFilter: React.FC<DayFilterProps> = ({
  selectedDay,
  onDayPress,
}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <html.div style={styles.container}>
        {dayFilters.map((day) => {
          const isActive = day.label === selectedDay;
          return (
            <html.button
              key={day.label}
              style={[styles.pill, isActive && styles.pillActive]}
              onClick={() => onDayPress(day.label)}
            >
              <html.div style={styles.pillInner}>
                <html.span
                  style={[styles.dayLabel, isActive && styles.dayLabelActive]}
                >
                  {day.label}
                </html.span>
                <html.span
                  style={[
                    styles.dateNumber,
                    isActive && styles.dateNumberActive,
                  ]}
                >
                  {day.date}
                </html.span>
              </html.div>
            </html.button>
          );
        })}
      </html.div>
    </ScrollView>
  );
};
