import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "create-a-curriculum",
  description: "Instagram-inspired sidebar for a curriculum app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-[#fafafa] font-sans text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          enableSystem={false}
        >
          <SidebarProvider className="min-h-screen">
            <AppSidebar />
            <main className="min-h-screen dark:bg-[#262525] bg-[#fafafa] flex-1  translate-x-[70px] flex flex-col">
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}