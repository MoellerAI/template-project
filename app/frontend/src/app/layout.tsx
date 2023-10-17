import React from "react";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster";

function RootLayout({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex w-full h-full gap-2 bg-page-background">{children}</div>
            <Toaster />
        </ThemeProvider>
    );
}

export default RootLayout;