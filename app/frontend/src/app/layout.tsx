import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const bgImageURL = "./background.webp";

function RootLayout({ children, hideBackground = false }: { children: React.ReactNode; hideBackground?: boolean }) {
    const backgroundStyle = hideBackground ? {} : { backgroundImage: `url(${bgImageURL})` };

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="bg-black min-h-screen">
                <div className="bg-no-repeat bg-top bg-white dark:bg-gray-900" style={backgroundStyle}>
                    <Header />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-full relative z-10">
                        <div className="my-5">{children}</div>
                    </div>
                    <Footer />
                    <Toaster />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default RootLayout;
