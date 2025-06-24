import { Metadata } from "next";
import DeliverablesComponent from "@/components/deliverables/no-result";

export const metadata: Metadata = {
  title: "Deliverables | Nexoris App",
  description: "View and manage all your project deliverables in one place.",
  keywords: ["deliverables", "project management", "Nexoris", "tasks", "filter"],
  robots: "index, follow",
};

const DeliverablesPage: React.FC = () => {
  return <DeliverablesComponent />
};

export default DeliverablesPage;
