import { Metadata } from "next";
import DeliverablesComponent from "@/components/meetings";

export const metadata: Metadata = {
  title: "Meetings | Nexoris App",
  description: "View and manage all your project deliverables in one place.",
  keywords: ["deliverables", "project management", "Nexoris", "tasks", "filter"],
  robots: robots: {
    index: false, // Prevents indexing
    follow: false, // Prevents following links on the page
    googleBot: {
      index: false,
      follow: false,
      // You can also add other specific Googlebot directives here
    },
  },
};

const MeetingsPage: React.FC = () => {
  return <DeliverablesComponent />
};

export default DeliverablesPage;
