'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', handle: '@swaggerrite', href: 'https://www.instagram.com/swaggerrite/', stat: '78K followers' },
  { label: 'Spotify', handle: 'Swagger Rite', href: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR', stat: '10K monthly' },
  { label: 'Apple Music', handle: 'Swagger Rite', href: 'https://music.apple.com/us/artist/swagger-rite/1163312706', stat: null },
  { label: 'SoundCloud', handle: 'swaggsrite', href: 'https://soundcloud.com/swaggsrite', stat: '2M+ streams' },
  { label: 'Twitter/X', handle: '@Swagger_Rite', href: 'https://twitter.com/swagger_rite', stat: null },
  { label: 'Sony Music', handle: 'Official', href: 'https://sonymusic.ca/en/artists/swagger-rite', stat: null },
]

const press = [
  { label: 'Complex', title: '"Toronto\'s Swagger Rite Is a One-Man Mosh Pit"', href: 'https://www.complex.com/music/a/alex-nino-gheciu/torontos-swagger-rite-is-a-one-man-most-pit' },
  { label: 'V13', title: 'Discusses New Music & Improving as a Songwriter', href: 'https://v13.net/2020/11/swagger-rite-discusses-new-music-the-swagged-out-pedestrian-and-improving-as-a-songwriter/' },
  { label: 'Wavelength', title: 'The WL Interview', href: 'https://www.wavelengthmusic.ca/zine/swagger-rite-the-wl-interview/' },
  { label: 'Toronto Guardian', title: 'Five Minutes With Swagger Rite', href: 'https://torontoguardian.com/2019/11/toronto-hip-hop-artist-swagger-rite/' },
  { label: 'HipHopCanada', title: 'Swagged Out Pedestrian Interview', href: 'https://hiphopcanada.com/swagger-rite-swagged-interview/' },
  { label: 'Respect My Region', title: 'The New Age of Toronto Hip-Hop', href: 'https://www.respectmyregion.com/swagger-rite-toronto-rapper/' },
]

export function Connect() {
  return (
    <section id="connect" className="section-padding bg-background relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase text-white leading-none">
            Connect
          </h2>
        </motion.div>

        {/* Social links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gold p-4 group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display text-lg font-bold uppercase text-white group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <ExternalLink className="w-3.5 h-3.5 text-text-dim group-hover:text-primary transition-colors" />
              </div>
              <p className="text-primary/70 text-xs font-accent tracking-wider">{link.handle}</p>
              {link.stat && (
                <p className="text-text-dim text-[10px] mt-1 font-accent">{link.stat}</p>
              )}
            </motion.a>
          ))}
        </div>

        {/* Press / Interviews */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-[10px] tracking-[0.3em] uppercase text-primary/70 mb-4 font-bold">
            Press & Interviews
          </p>
          <div className="space-y-2">
            {press.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 border-b border-white/[0.04] group hover:bg-primary/[0.03] px-4 -mx-4 transition-all duration-200"
              >
                <div className="min-w-0 flex-1">
                  <span className="font-accent text-[10px] tracking-wider uppercase text-text-dim font-bold">{item.label}</span>
                  <p className="text-sm text-text-muted group-hover:text-white transition-colors truncate">{item.title}</p>
                </div>
                <ExternalLink className="w-3 h-3 text-text-dim group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-display text-3xl md:text-4xl font-bold uppercase text-text-muted leading-tight">
            &ldquo;They always used to say <span className="text-primary">&apos;swagger right shawty.&apos;</span> It just stuck.&rdquo;
          </p>
          <p className="mt-4 font-accent text-[10px] tracking-[0.3em] uppercase text-text-dim">
            &mdash; Swagger Rite
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
