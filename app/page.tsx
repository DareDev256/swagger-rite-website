import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { FeaturedMusic } from '@/components/FeaturedMusic'
import { Discography } from '@/components/Discography'
import { Story } from '@/components/Story'
import { Cosigns } from '@/components/Cosigns'
import { Connect } from '@/components/Connect'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedMusic />
      <Discography />
      <Story />
      <Cosigns />
      <Connect />
      <Footer />
    </main>
  )
}
