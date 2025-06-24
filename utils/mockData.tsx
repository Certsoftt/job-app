import React from "react";

export type sidebarNavItemsType = {
    label: string;
    href: string;
    icon: Array<string[]>;
    active: boolean;
}

export const sidebarNavItems: sidebarNavItemsType[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: [['/dashboard-circle.svg','/dashboard-circle-hover.svg']],
    active: false,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: [['/user-single.svg','/user-single-hover.svg']],
    active: false,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: [['/search-dollar.svg', '/search-dollar-hover.svg']],
    active: false,
  },
  {
    label: "Deliverables",
    href: "/deliverables",
    icon: [['/insert-side.svg','/insert-side-hover.svg']],
    active: true,
  },
  {
    label: "Meetings",
    href: "/meetings",
    icon: [['/webcam-video.svg','/webcam-video-hover.svg']],
    active: false,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: [['/chat-bubble.svg','/chat-bubble-hover.svg']],
    active: false,
  },
  {
    label: "Payments",
    href: "/payments",
    icon: [['/bill-2--currency.svg', '/bill-2--currency-hover.svg']],
    active: false,
  },
];

export const sidebarNavSetting: sidebarNavItemsType[] =[
  {
    label: "Settings",
    href: "/settings",
    icon: [['/cog--work.svg','/cog--work-hover.svg']],
    active: false,
  },
]

export const userProfile = {
  name: "Tolu Ayomide",
  role: "Product Manager",
  avatar: "/Profile-pic.svg",
};

export const filterOptions = {
  client: ["All Clients", "Client A", "Client B"],
  project: ["All Projects", "Project X", "Project Y"],
  status: ["All Status", "Pending", "Completed"],
  date: ["Newest", "Oldest"],
};
