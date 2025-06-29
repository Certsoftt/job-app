import { Metadata } from "next";
import ClientComponent from "@/components/clients";

export const metadata: Metadata = {
  title: "Clients | Nexoris App",
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

const ClientsPage: React.FC = () => {
  return <ClientComponent />
};

export default ClientsPage;
