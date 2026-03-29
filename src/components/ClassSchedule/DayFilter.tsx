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
    paddingLeft: 24,
    paddingTop: 8,
    paddingBottom: 8,
  },
  pill: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 9999,
    borderWidth: 0,
    backgroundColor: "#20201f",
  },
  pillActive: {
    backgroundColor: "#95aaff",
  },
  pillText: {
    fontFamily: "Space Grotesk",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#adaaaa",
  },
  pillTextActive: {
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
          const isActive = day === selectedDay;
          return (
            <html.button
              key={day}
              style={[styles.pill, isActive && styles.pillActive]}
              onClick={() => onDayPress(day)}
            >
              <html.span
                style={[styles.pillText, isActive && styles.pillTextActive]}
              >
                {day}
              </html.span>
            </html.button>
          );
        })}
      </html.div>
    </ScrollView>
  );
};
