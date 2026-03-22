import React from "react";
import { html, css } from "react-strict-dom";
import { navItems } from "@/data/mockData";

interface BottomNavProps {
  readonly onNavigate?: (id: string) => void;
}

const styles = css.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#131313",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 8,
    opacity: 0.6,
  },
  navItemActive: {
    backgroundColor: "#95aaff",
    borderRadius: 9999,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    opacity: 1,
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 4,
    color: "#71717a",
  },
  navIconActive: {
    color: "#0e0e0e",
  },
  navLabel: {
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

export const BottomNav: React.FC<BottomNavProps> = ({ onNavigate }) => {
  return (
    <html.nav style={styles.nav}>
      {navItems.map((item) => (
        <html.button
          key={item.id}
          style={[styles.navItem, item.active && styles.navItemActive]}
          onClick={() => onNavigate?.(item.id)}
        >
          <html.span
            style={[styles.navIcon, item.active && styles.navIconActive]}
          >
            {item.icon === "grid_view"
              ? "⊞"
              : item.icon === "fitness_center"
                ? "🏋️"
                : item.icon === "style"
                  ? "🎴"
                  : "👤"}
          </html.span>
          <html.span
            style={[styles.navLabel, item.active && styles.navLabelActive]}
          >
            {item.label}
          </html.span>
        </html.button>
      ))}
    </html.nav>
  );
};
