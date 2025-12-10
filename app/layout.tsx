import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { KickLivePopupProvider } from '@/components/KickLivePopup'
import KickLivePopup from '@/components/KickLivePopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'House of Degens - Casino Streamer Affiliate Offers',
  description: 'Exclusive casino bonuses and offers from House of Degens stream',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KickLivePopupProvider channel="houseofdegens">
          {children}
          <KickLivePopup />
        </KickLivePopupProvider>
      </body>
    </html>
  )
}

