import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chitchat - Real-Time Chat Made Simple",
  description: "Connect, communicate, and collaborate with Chitchat - the seamless real-time chat app for personal and team communication.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwOWVjMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNNi41IDNoMTFjMS4zMjUgMCAyLjUgMSAyLjUgMi41YzAgMiAtMS43MDUgMy4yNjQgLTIgMy41bC00LjUgNGwyIC01aC05YTIuNSAyLjUgMCAwIDEgMCAtNXoiIC8+CiAgPHBhdGggZD0iTTE3LjUgMjFoLTExYy0xLjMyNSAwIC0yLjUgLTEgLTIuNSAtMi41YzAgLTIgMS43MDUgLTMuMjY0IDIgLTMuNWw0LjUgLTRsLTIgNWg5YTIuNSAyLjUgMCAxIDEgMCA1eiIgLz4KPC9zdmc+",
        type: "image/svg+xml",
      }
    ],
    shortcut: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwOWVjMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNNi41IDNoMTFjMS4zMjUgMCAyLjUgMSAyLjUgMi41YzAgMiAtMS43MDUgMy4yNjQgLTIgMy41bC00LjUgNGwyIC01aC05YTIuNSAyLjUgMCAwIDEgMCAtNXoiIC8+CiAgPHBhdGggZD0iTTE3LjUgMjFoLTExYy0xLjMyNSAwIC0yLjUgLTEgLTIuNSAtMi41YzAgLTIgMS43MDUgLTMuMjY0IDIgLTMuNWw0LjUgLTRsLTIgNWg5YTIuNSAyLjUgMCAxIDEgMCA1eiIgLz4KPC9zdmc+",
    apple: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwOWVjMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNNi41IDNoMTFjMS4zMjUgMCAyLjUgMSAyLjUgMi41YzAgMiAtMS43MDUgMy4yNjQgLTIgMy41bC00LjUgNGwyIC01aC05YTIuNSAyLjUgMCAwIDEgMCAtNXoiIC8+CiAgPHBhdGggZD0iTTE3LjUgMjFoLTExYy0xLjMyNSAwIC0yLjUgLTEgLTIuNSAtMi41YzAgLTIgMS43MDUgLTMuMjY0IDIgLTMuNWw0LjUgLTRsLTIgNWg5YTIuNSAyLjUgMCAxIDEgMCA1eiIgLz4KPC9zdmc+"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}