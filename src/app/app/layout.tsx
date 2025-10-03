"use client";

import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <SidebarProvider>
        <AppSidebar />
        <main>
            <SidebarTrigger />
            {children}
        </main>
    </SidebarProvider>
  );
}