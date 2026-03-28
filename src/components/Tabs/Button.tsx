import { Href, useRouter } from "expo-router";
import React from "react";
import { html, css } from "react-strict-dom";

interface ButtonProps {
  href: Href;
  label: string;
  icon: string;
  active: boolean;
}

const styles = css.create({
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    // padding: 8,
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
