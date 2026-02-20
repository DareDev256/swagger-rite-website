'use client'

import { motion } from 'framer-motion'
import { Play, Flame, Star, Tv, Zap } from 'lucide-react'

const featured = [
  {
    title: 'Drop Top',
    feat: 'ft. Yella Beezy & Flipp Dinero',
    year: '2019',
    badge: 'Featured on HBO Euphoria',
    badgeIcon: 'tv',
    description: 'The breakout single that landed on HBO\'s Euphoria starring Zendaya. Gritty trap-infused tour de force.',
    spotifyUrl: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR',
    appleMusicUrl: 'https://music.apple.com/us/artist/swagger-rite/1163312706',
  },
  {
    title: 'Drugs & Love',
    feat: 'ft. Roy Woods',
    year: '2020',
    badge: 'Sony Music Canada',
    badgeIcon: 'star',
    description: 'Synth-heavy, moody collab with Roy Woods. Produced by DIMI — signature Toronto hometown sound.',
    spotifyUrl: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR',
    appleMusicUrl: 'https://music.apple.com/us/album/drugs-love-single/1543480707',
  },
  {
    title: 'In Love with the K',
    feat: 'ft. BlocBoy JB',
    year: '2019',
    badge: 'Fan Favorite',
    badgeIcon: 'flame',
    description: 'A hard-hitting duet combining both artists\' distinctive trap styles. Critics and fans alike gave it favorable reviews.',
    spotifyUrl: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR',
    appleMusicUrl: 'https://music.apple.com/us/artist/swagger-rite/1163312706',
  },
]

function BadgeIcon({ type }: { type: string }) {
  switch (type) {
    case 'tv': return <Tv className="w-3 h-3" />
    case 'star': return <Star className="w-3 h-3" />
    case 'flame': return <Flame className="w-3 h-3" />
    default: return <Star className="w-3 h-3" />
  }
}

export function FeaturedMusic() {
  return (
    <section id="music" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Featured</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            The Hits
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <Zap className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        {/* Featured tracks */}
        <div className="space-y-6">
          {featured.map((track, i) => (
            <motion.div
              key={track.title}
              className="card-gold p-6 md:p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Play icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-gold-sm transition-all duration-500">
                  <Play className="w-6 h-6 text-primary ml-0.5" fill="currentColor" />
                </div>

                {/* Track info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white">
                      {track.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      <BadgeIcon type={track.badgeIcon} />
                      <span className="font-accent text-xs tracking-wider text-primary font-semibold">
                        {track.badge}
                      </span>
                    </span>
                  </div>
                  <p className="text-primary/80 font-accent text-sm tracking-wider">{track.feat}</p>
                  <p className="text-text-muted text-sm mt-2 max-w-2xl">{track.description}</p>
                </div>

                {/* Year + links */}
                <div className="flex-shrink-0 text-right space-y-3">
                  <p className="font-display text-3xl font-bold text-white/10">{track.year}</p>
                  <div className="flex gap-2 justify-end">
                    <a
                      href={track.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-white/10 text-text-muted text-xs font-accent tracking-wider hover:border-primary/30 hover:text-primary transition-all duration-300 rounded"
                    >
                      Spotify
                    </a>
                    <a
                      href={track.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-white/10 text-text-muted text-xs font-accent tracking-wider hover:border-primary/30 hover:text-primary transition-all duration-300 rounded"
                    >
                      Apple
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
