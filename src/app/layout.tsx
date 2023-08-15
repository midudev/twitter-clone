import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Generado moviendo las manitas'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
