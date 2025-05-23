import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export const metadata = {
  title: 'Portfolio – Hon. Peter Maina (Maina Osama)',
  description:
    'Discover the journey, achievements, and vision of Hon. Peter Maina. Explore his track record of leadership, community service, and development across the region.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
