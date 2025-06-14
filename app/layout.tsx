import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import { SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMC-clinic",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultOpen = (await cookies()).get("sidebar_state")?.value === "true";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        suppressHydrationWarning={true}
      >
        <div className="w-screen flex overflow-hidden">
          <div>
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
            </SidebarProvider>
          </div>
          <div className="w-full flex flex-col flex-1">
            <div className="static top-0 h-20">
              <Navbar />
            </div>
            <div className="p-4 flex-1 bg-bg-blue">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
