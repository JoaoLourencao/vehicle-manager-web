import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Vehicle Manager',
  description: 'Gerenciador de veículos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-default-bg text-gray-900`}>{children}</body>
    </html>
  )
}
