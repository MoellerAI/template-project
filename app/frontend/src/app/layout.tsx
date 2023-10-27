import React from "react";
import Background from "@/components/ui/background"; // Make sure these paths are correct
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Background />
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-full">
        {/* Main content passed from the pages */}
        <div className="relative my-5">{children}</div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default RootLayout;