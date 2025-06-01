import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export const metadata = {
  title: 'Hon. Peter Maina | Maina Osama – MCA Uthiru/Ruthimitu, Nairobi County',
  description:
    'Official website of Hon. Peter Maina (alias Maina Osama), MCA for Uthiru/Ruthimitu Ward. Dedicated to grassroots development, transparent leadership, and empowering communities through inclusive governance.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Hon. Peter Maina | Maina Osama – Grassroots Leadership for Uthiru/Ruthimitu',
    description:
      'Discover the vision, leadership, and development agenda of Hon. Peter Maina (Maina Osama), MCA for Uthiru/Ruthimitu Ward. Explore his initiatives, community impact, and key focus areas in Nairobi County.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: '/maish.png', // Update this if your logo or hero image differs
        width: 1200,
        height: 630,
        alt: 'Hon. Peter Maina – Leadership for Uthiru/Ruthimitu',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
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
