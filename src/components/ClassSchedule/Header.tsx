import React from "react";
import { html, css } from "react-strict-dom";
import { profileImageUrl } from "@/data/mockData";

interface HeaderProps {
  readonly onNotificationPress?: () => void;
}

const styles = css.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#0e0e0e",
  },
  leftGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  brandName: {
    fontSize: 24,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#95aaff",
    letterSpacing: -1,
    fontFamily: "Space Grotesk",
  },
  notificationButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 4,
    color: "#95aaff",
    fontSize: 24,
  },
});

export const Header: React.FC<HeaderProps> = ({ onNotificationPress }) => {
  return (
    <html.header style={styles.header}>
      <html.div style={styles.leftGroup}>
        <html.img src={profileImageUrl} alt="Profile" style={styles.avatar} />
        <html.span style={styles.brandName}>KINETIC</html.span>
      </html.div>
      <html.button
        style={styles.notificationButton}
        onClick={onNotificationPress}
      >
        <html.span>🔔</html.span>
      </html.button>
    </html.header>
  );
};
