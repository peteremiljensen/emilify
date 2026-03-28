import { Href } from "expo-router";

export interface ClassData {
  readonly id: string;
  readonly time: string;
  readonly duration: string;
  readonly name: string;
  readonly instructor: string;
  readonly slotsLabel: string;
  readonly slotsPercent: number;
  readonly status: "available" | "low" | "full";
}

export interface FeaturedClassData {
  readonly id: string;
  readonly tag: string;
  readonly title: string;
  readonly subtitle: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly ctaLabel: string;
}

export interface NavItem {
  readonly id: string;
  readonly href: Href;
  readonly icon: string;
  readonly label: string;
  readonly active: boolean;
}

export const dayFilters = ["Today", "Mon", "Tue", "Wed", "Thu"] as const;

export const classes: readonly ClassData[] = [
  {
    id: "1",
    time: "07:30",
    duration: "60 MIN",
    name: "Power HIIT",
    instructor: "MARCUS VANCE",
    slotsLabel: "4 SLOTS LEFT",
    slotsPercent: 80,
    status: "low",
  },
  {
    id: "2",
    time: "09:00",
    duration: "45 MIN",
    name: "Iron Flow",
    instructor: "SARAH CHEN",
    slotsLabel: "12 SLOTS LEFT",
    slotsPercent: 40,
    status: "available",
  },
  {
    id: "3",
    time: "12:30",
    duration: "60 MIN",
    name: "Core Ignite",
    instructor: "ELENA RODRIGUEZ",
    slotsLabel: "FULL",
    slotsPercent: 100,
    status: "full",
  },
  {
    id: "4",
    time: "17:00",
    duration: "50 MIN",
    name: "Heavy Metal",
    instructor: "MARCUS VANCE",
    slotsLabel: "8 SLOTS LEFT",
    slotsPercent: 60,
    status: "available",
  },
];

export const featuredClass: FeaturedClassData = {
  id: "featured-1",
  tag: "Masterclass",
  title: "Hyper-\ntrophy",
  subtitle: "Guest: Coach Jax \u2022 Sat 11:00",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpZIXWvhoNahXnliubxosd1Pr7TTt0MZa1g7w5rLX1pxYhk38MTgE6bN5V_h7v3NmDIdwnRJHHlBER9Uy0qUWgxLJlQ3GpjRkNtkoWKaTP82wYwFZoXA20Duwy6rnAZQ3P2_B1OOdMwhxMgU0A1RpLQBXwhSFGMmyd3KgSnTmnLCNxpazXHiwqxnLwLMZrN58LC4-12mTcoyO0aTS-jn-gaC0NG6XZ75jHb6KOIQJcbdS7a2XHZOMXFROtO4G_j-exNPd-q2xla7A",
  imageAlt: "High contrast black and white gym aesthetic",
  ctaLabel: "Reserve Spot",
};

export const profileImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLZJ31UUn8X8Qwwic9OvuXXwyGBopQObseJa12xMVPwd8ys8Dy0eO8Ty4IEmOpxaEcx7WSNJZJshJsAmsyG8ehm9xpzxfbpbS0ZxRAgLerK3nWlMfJnCNy6XXRgRJIfUQA0NTG0kvZL0fKGb5lrgaQ6gv-MY8OVh_wgZrQ4n0qIiVlTlI0UYzOQhJy9Fz1mCWIs4iFQPfL39Pfq9W83CkHXFV9Ig9Qj7wQF-Sl3bkJrdNduf6y4s8JkzTfu9Iid9xJxnjg59qIVPs";

export const navItems: readonly NavItem[] = [
  { id: "home", href: "/", icon: "grid_view", label: "Home", active: false },
  {
    id: "classes",
    href: "/classes",
    icon: "fitness_center",
    label: "Classes",
    active: true,
  },
  { id: "plans", href: "/plans", icon: "style", label: "Plans", active: false },
  // {
  //   id: "profile",
  //   href: "/profile",
  //   icon: "person",
  //   label: "Profile",
  //   active: false,
  // },
];
