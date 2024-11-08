import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
    title: "AI Video Educational Platform",
    description:
        "AI Supported Video Platform for every user, who wants to learn from platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    );
}
