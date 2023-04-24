import '@suiet/wallet-kit/style.css';
import './globals.css'

import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'SUI Dapps',
  description: 'Step by step examples SUI dapps',
}

const font = Nunito({
  subsets: [
    "latin"
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
