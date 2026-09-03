import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "create-a-curriculum",
  description: "Instagram-inspired sidebar for a curriculum app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "min-h-screen bg-[#fafafa] font-sans text-foreground")}>
        <SidebarProvider className="min-h-screen">
          <AppSidebar />
          <main className="min-h-screen flex-1 bg-[#fafafa] translate-x-[70px] flex flex-col  ">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
