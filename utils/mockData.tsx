import { TableRowData } from "@/components/deliverables/default/TableRow";

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
  client: ["All Clients", "Tayo Wellens", "Andrew James"],
  project: ["All Projects", "Food Delivery App", "Project Management App"],
  status: ["All Status", "Approved", "Pending Approval", "In Progress", "Not Started"],
  date: ["Newest", "Oldest", "Feb 15", "Due Today", "Due Tomorrow"],
};

export const TableMockData: TableRowData[] = [
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Approved", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Pending Approval", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "In Progress", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
  { deliverable: "Homepage Design", project: "Food Delivery App", client: "Tayo Wellens", assignedTo: "John Doe", status: "Not Started", dueDate: "Feb 15" },
];