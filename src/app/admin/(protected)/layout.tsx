"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Preloader from "@/components/utilities/Preloader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "react-hot-toast";
import "../antigravity.css";
import { Syne, DM_Mono } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const dmMono = DM_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-dm-mono' });

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (status === "loading" || status === "unauthenticated") {
    return <Preloader />;
  }

  return (
    <ThemeProvider>
      <div className={`admin-container ${syne.variable} ${dmMono.variable} ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="gradientMesh">
          <div className="meshOrb"></div>
          <div className="meshOrb"></div>
          <div className="meshOrb"></div>
        </div>
        <AdminSidebar />
        <div className="admin-main">
          <AdminHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="admin-content" onClick={() => setSidebarOpen(false)}>{children}</main>
        </div>
        {/* Mobile overlay */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}
