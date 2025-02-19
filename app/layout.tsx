import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "ResearchAI",
    description: "Transform your research with AI power",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
        </body>
        </html>
    )
}