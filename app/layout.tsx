import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "To Do List",
    description: "Handle your daily tasks with ease"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} bg-[#1A1A1A] antialiased`}>
                <Header />
                <div className="relative">
                    <main className="flex w-full items-center justify-center">
                        <div className="container relative flex w-2/5 flex-col items-center gap-16">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
