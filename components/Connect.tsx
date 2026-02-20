'use client'

import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', handle: '@swaggerrite', href: 'https://www.instagram.com/swaggerrite/', followers: '78K followers' },
  { label: 'Spotify', handle: 'Swagger Rite', href: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR', followers: '10K monthly listeners' },
  { label: 'Apple Music', handle: 'Swagger Rite', href: 'https://music.apple.com/us/artist/swagger-rite/1163312706', followers: null },
  { label: 'SoundCloud', handle: 'swaggsrite', href: 'https://soundcloud.com/swaggsrite', followers: '2M+ streams' },
  { label: 'Twitter/X', handle: '@Swagger_Rite', href: 'https://twitter.com/swagger_rite', followers: null },
  { label: 'Sony Music', handle: 'Official Page', href: 'https://sonymusic.ca/en/artists/swagger-rite', followers: null },
]

export function Connect() {
  return (
    <section id="connect" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Stay Updated</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            Connect
          </h2>
        </motion.div>

        {/* Social links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gold p-5 text-left group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
              </div>
              <p className="text-primary/70 text-sm font-accent tracking-wider">{link.handle}</p>
              {link.followers && (
                <p className="text-text-dim text-xs mt-2 font-accent">{link.followers}</p>
              )}
            </motion.a>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-display text-2xl md:text-3xl font-bold uppercase text-text-muted leading-relaxed">
            &ldquo;They always used to say <span className="text-primary">&apos;swagger right shawty.&apos;</span> It just stuck.&rdquo;
          </p>
          <p className="mt-4 font-accent text-sm tracking-[0.2em] uppercase text-text-dim">
            — Swagger Rite
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
