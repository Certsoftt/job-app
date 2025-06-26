import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import TableAndFilterOptionsMockDataProvider from "@/utils/mockTableAndFilterOptionsData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexoris App",
  description: "Project Management UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TableAndFilterOptionsMockDataProvider>
          <main className="bg-[#EAE8F7] min-h-screen">
            <div className="container mx-auto flex gap-6">
              <Sidebar />
              <div className="mt-[22px] w-[1260px]">
                <TopNav />
                {children}
              </div>
            </div>
          </main>
        </TableAndFilterOptionsMockDataProvider>
      </body>
    </html>
  );
}
