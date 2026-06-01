import type React from "react"
import type { Metadata } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "X-WorkFlow — نظام إدارة مشاريع المصممين",
  description:
    "X-WorkFlow هو برنامج متخصص لإدارة مشاريع المصممين، يتضمن إدارة العملاء والمشاريع وتتبع الوقت والأموال والتحليلات الشاملة.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/x-workflow-logo.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
