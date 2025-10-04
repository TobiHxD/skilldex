"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <div className="min-h-screen min-w-screen flex">
        <AppSidebar />
        <main className="flex-1">
            <SidebarTrigger className="absolute"/>
            {children}
        </main>
        </div>
    </SidebarProvider>
  );
}