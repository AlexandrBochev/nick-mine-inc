import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { MAIN_LAYOUT } from "@/constants/constants"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = MAIN_LAYOUT.METADATA

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased bg-background`}>
        {children}
        <Toaster toastOptions={{ success: { duration: 4000 }}} />
      </body>
    </html>
  );
}
