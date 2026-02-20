'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Background — Drop Top video thumbnail */}
      <div className="absolute inset-0">
        <img
          src="https://img.youtube.com/vi/9fcQrtVvTrM/maxresdefault.jpg"
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ filter: 'grayscale(40%) contrast(1.3) brightness(0.25)' }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background z-[1]" />

      {/* Gold ambient glow */}
      <div className="absolute inset-0 z-[2]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[150px]" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 vignette z-[3]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl">
        {/* Sony badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="font-accent text-[10px] tracking-[0.3em] uppercase text-primary font-bold">
            Sony Music Canada
          </span>
        </motion.div>

        {/* Artist Name */}
        <motion.h1
          className="font-display text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] leading-[0.85] font-bold uppercase"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-white">Swagger</span>
          <span className="block shimmer-text">Rite</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="gold-line" />
          <p className="font-accent text-xs tracking-[0.3em] uppercase text-text-muted font-bold">
            Toronto&apos;s One-Man Mosh Pit
          </p>
          <div className="gold-line" />
        </motion.div>

        {/* Euphoria callout */}
        <motion.p
          className="mt-3 font-accent text-[10px] tracking-[0.3em] uppercase text-primary/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          As featured on HBO&apos;s Euphoria
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <a
            href="https://www.youtube.com/watch?v=9fcQrtVvTrM"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3 bg-primary hover:bg-primary-light text-background font-display text-sm tracking-wider uppercase font-bold transition-all duration-300 hover:shadow-gold"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Watch Drop Top
          </a>
          <a
            href="https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary/30 text-primary font-display text-sm tracking-wider uppercase font-bold hover:bg-primary/10 transition-all duration-300"
          >
            Stream on Spotify
          </a>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
