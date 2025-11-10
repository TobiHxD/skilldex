"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/sidebar";
import { Banner } from "@/components/banner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <div className="min-h-screen min-w-screen flex">
          <AppSidebar />
          <main className="relative flex-1 overflow-hidden">
              <SidebarTrigger className="absolute"/>
              {children}
              <Banner />
          </main>
        </div>
    </SidebarProvider>
  );
}