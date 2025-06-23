import React from "react";

export type sidebarNavItemsType = {
    label: string;
    href: string;
    icon: string;
    active: boolean;
}

export const sidebarNavItems: sidebarNavItemsType[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: '/icons/dark/dashboard.png',
    active: false,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: '/icons/dark/person.png',
    active: false,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: '/icons/dark/search.png',
    active: false,
  },
  {
    label: "Deliverables",
    href: "/deliverables",
    icon: '/icons/dark/view_list.png',
    active: true,
  },
  {
    label: "Meetings",
    href: "/meetings",
    icon: '/icons/dark/webcam.png',
    active: false,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: '/icons/dark/chat-bubble.png',
    active: false,
  },
  {
    label: "Payments",
    href: "/payments",
    icon: '/icons/dark/bill.png',
    active: false,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: '/icons/dark/cog.png',
    active: false,
  },
];

export const userProfile = {
  name: "Tolu Ayomide",
  role: "Product Manager",
  avatar: "/images/Profile pic.png",
};

export const filterOptions = {
  client: ["All Clients", "Client A", "Client B"],
  project: ["All Projects", "Project X", "Project Y"],
  status: ["All Status", "Pending", "Completed"],
  date: ["Newest", "Oldest"],
};
