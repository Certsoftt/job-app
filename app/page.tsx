import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Dashboard | Nexoris App",
  description: "View and manage all your project deliverables in one place.",
  keywords: ["deliverables", "project management", "Nexoris", "tasks", "filter"],
  robots: "index, follow",
};

const Home = () => {
  return(
    <>Dashboard</>
  );
};

export default Home;
