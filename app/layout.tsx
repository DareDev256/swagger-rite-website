import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Oswald, Rajdhani } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const oswald = Oswald({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SWAGGER RITE | Official Website',
  description: 'Official website of Toronto rapper Swagger Rite. Sony Music Canada. Weston Road. The Swagged Out Pedestrian.',
  keywords: ['Swagger Rite', 'Toronto rapper', 'Sony Music', 'hip hop', 'Weston Road', 'Drop Top', 'Euphoria'],
  openGraph: {
    title: 'SWAGGER RITE | Official Website',
    description: 'Toronto rapper Swagger Rite — Sony Music Canada',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SWAGGER RITE | Official Website',
    description: 'Toronto rapper Swagger Rite — Sony Music Canada',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} ${rajdhani.variable}`}>
      <body className="bg-background text-text-primary">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
