import { Metadata } from "next";
import DeliverablesComponent from "@/components/deliverables/no-result";

export const metadata: Metadata = {
  title: "Deliverables | Nexoris App",
  description: "View and manage all your project deliverables in one place.",
  keywords: ["deliverables", "project management", "Nexoris", "tasks", "filter"],
  robots: {
    index: false, // Prevents indexing
    follow: false, // Prevents following links on the page
    googleBot: {
      index: false,
      follow: false,
      // You can also add other specific Googlebot directives here
    },
  },
};

const DeliverablesPage: React.FC = () => {
  return <DeliverablesComponent />
};

export default DeliverablesPage;
