import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WanderTribe — Travel Together, Live Local',
  description: 'A trust-first travel community for finding your travel tribe, organizing group adventures, and experiencing India through meaningful connections.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
