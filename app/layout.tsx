import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-main`}>
        <div className="flex min-h-screen">
          <div className="flex flex-col h-full bg-white rounded-[24px] shadow-lg m-4 ml-6 w-[260px] min-w-[220px]">
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="w-full bg-white rounded-[24px] shadow-lg mt-4 mr-6 ml-0 mb-0">
              <TopNav />
            </div>
            <main className="flex-1 px-8 pt-10 pb-0 md:pb-0 md:pt-12 md:px-16 bg-transparent">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
