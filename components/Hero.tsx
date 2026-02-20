'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient with gold accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent to-background" />

      {/* Gold radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[80px]" />
      </div>

      {/* Diagonal gold stripes */}
      <div className="absolute inset-0 gold-stripe opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Sony Music badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 rounded-full mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Zap className="w-3 h-3 text-primary" fill="currentColor" />
          <span className="font-accent text-xs tracking-[0.2em] uppercase text-primary font-semibold">
            Sony Music Canada
          </span>
        </motion.div>

        {/* Main name — bold condensed */}
        <motion.h1
          className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.9] font-bold uppercase"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="block text-white">Swagger</span>
          <span className="block shimmer-text">Rite</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-6 font-accent text-lg md:text-xl tracking-[0.15em] uppercase text-text-muted font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Toronto &bull; Weston Road &bull; Trap
        </motion.p>

        {/* Euphoria callout */}
        <motion.div
          className="mt-4 inline-flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <span className="h-px w-8 bg-primary/40" />
          <p className="font-accent text-xs tracking-[0.2em] uppercase text-primary/70">
            As featured on HBO&apos;s Euphoria
          </p>
          <span className="h-px w-8 bg-primary/40" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <a
            href="https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-primary hover:bg-primary-light text-background font-display text-sm tracking-[0.15em] uppercase font-bold rounded transition-all duration-300 hover:shadow-gold"
          >
            Stream on Spotify
          </a>
          <a
            href="https://music.apple.com/us/artist/swagger-rite/1163312706"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary/30 text-primary font-display text-sm tracking-[0.15em] uppercase font-bold rounded hover:bg-primary/10 transition-all duration-300"
          >
            Apple Music
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
