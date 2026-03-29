import React from "react";
import { html, css } from "react-strict-dom";
import type { ClassData } from "@/data/mockData";

interface ClassItemProps {
  readonly classData: ClassData;
  readonly onBook?: (id: string) => void;
}

const styles = css.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  timeRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 14,
  },
  time: {
    fontFamily: "Space Grotesk",
    fontSize: 24,
    fontWeight: "700",
    color: "#95aaff",
    letterSpacing: -1,
  },
  duration: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    color: "#adaaaa",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  classRow: {},
  className: {
    fontFamily: "Space Grotesk",
    fontSize: 28,
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: -0.5,
  },
  instructor: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Inter",
    fontSize: 14,
    color: "#adaaaa",
  },
  bottomRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  slotsContainer: {
    flex: 1,
  },
  slotsLabel: {
    lineHeight: 1,
    fontFamily: "Space Grotesk",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  slotsLabelLow: {
    color: "#ff7439",
  },
  slotsLabelAvailable: {
    color: "#adaaaa",
  },
  slotsLabelFull: {
    color: "#ff6e84",
  },
  progressTrack: {
    height: 4,
    backgroundColor: "#262626",
    borderRadius: 2,
    marginTop: 8,
    overflow: "hidden",
  },
  progressFill: (percent: number) => ({
    height: 4,
    borderRadius: 2,
    width: `${percent}%` as `${number}%`,
  }),
  progressFillLow: {
    backgroundColor: "#ff7439",
  },
  progressFillAvailable: {
    backgroundColor: "#3766ff",
  },
  progressFillFull: {
    backgroundColor: "#ff6e84",
  },
  bookButton: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 9999,
    borderWidth: 0,
    backgroundColor: "#95aaff",
  },
  bookButtonDisabled: {
    backgroundColor: "#262626",
  },
  bookButtonText: {
    fontFamily: "Space Grotesk",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#000000",
  },
  bookButtonTextDisabled: {
    color: "#adaaaa",
    opacity: 0.5,
  },
  icon: {
    fontSize: 16,
    fontFamily: "Material Symbols",
    fontWeight: 400,
  },
});

export const ClassItem: React.FC<ClassItemProps> = ({ classData, onBook }) => {
  const isFull = classData.status === "full";
  const isLow = classData.status === "low";

  const slotsLabelStyle = isFull
    ? styles.slotsLabelFull
    : isLow
      ? styles.slotsLabelLow
      : styles.slotsLabelAvailable;

  const progressFillStyle = isFull
    ? styles.progressFillFull
    : isLow
      ? styles.progressFillLow
      : styles.progressFillAvailable;

  return (
    <html.div style={styles.container}>
      <html.div style={styles.timeRow}>
        <html.span style={styles.time}>{classData.time}</html.span>
        <html.span style={styles.duration}>{classData.duration}</html.span>
      </html.div>
      <html.div style={styles.classRow}>
        <html.h2 style={styles.className}>{classData.name}</html.h2>
        <html.div style={styles.instructor}>
          <html.div style={styles.icon}>person</html.div>
          <html.div>{classData.instructor}</html.div>
        </html.div>
      </html.div>
      <html.div style={styles.bottomRow}>
        <html.div style={styles.slotsContainer}>
          <html.span style={[styles.slotsLabel, slotsLabelStyle]}>
            {classData.slotsLabel}
          </html.span>
          <html.div style={styles.progressTrack}>
            <html.div
              style={[
                styles.progressFill(classData.slotsPercent),
                progressFillStyle,
              ]}
            />
          </html.div>
        </html.div>
        <html.button
          style={[styles.bookButton, isFull && styles.bookButtonDisabled]}
          onClick={() => !isFull && onBook?.(classData.id)}
          disabled={isFull}
        >
          <html.span
            style={[
              styles.bookButtonText,
              isFull && styles.bookButtonTextDisabled,
            ]}
          >
            {isFull ? "Waitlist" : "Book"}
          </html.span>
        </html.button>
      </html.div>
    </html.div>
  );
};
