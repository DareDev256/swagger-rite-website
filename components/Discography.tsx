'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Music } from 'lucide-react'

const releases = [
  {
    title: 'Dangerous',
    type: 'Project',
    year: '2022',
    tracks: null,
    links: { spotify: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR' },
  },
  {
    title: 'Detour',
    type: 'Album',
    year: '2021',
    tracks: 'Drill, synth-heavy pop & hip-hop',
    links: { spotify: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR' },
  },
  {
    title: 'The Swagged Out Pedestrian',
    type: 'Debut EP',
    year: '2019',
    tracks: 'Sony Music Canada debut',
    links: {
      spotify: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR',
      apple: 'https://music.apple.com/us/artist/swagger-rite/1163312706',
    },
  },
  {
    title: 'P.O.M.E.',
    type: 'Mixtape',
    year: '2016',
    tracks: 'Product Of My Environment — 2M+ SoundCloud streams',
    links: { soundcloud: 'https://soundcloud.com/swaggsrite' },
  },
]

const singles = [
  { title: 'Merry Christmas', year: '2024' },
  { title: 'Off Camera', year: '2023' },
  { title: '47 Clips', year: '2023' },
  { title: 'Can I Live', year: '2023' },
  { title: 'Dangerous', year: '2022' },
  { title: 'Spicy', year: '2021' },
  { title: 'Compton ft. Sha Hustle & Eva Shaw', year: '2021' },
  { title: 'Heart Broke Rockstar Sh*t', year: '2020' },
  { title: 'Sticky', year: '2020' },
  { title: 'Like That', year: '2020' },
  { title: 'SPLASH GOD ft. Lord Afrixana', year: '2020' },
  { title: 'Drugs & Love ft. Roy Woods', year: '2020' },
  { title: 'Finals (Raptors Anthem)', year: '2019' },
  { title: 'In Love with the K ft. BlocBoy JB', year: '2019' },
  { title: 'Drop Top ft. Yella Beezy & Flipp Dinero', year: '2019' },
  { title: 'Drop ft. Ski Mask the Slump God & Kid Buu', year: '2018' },
]

export function Discography() {
  return (
    <section id="discography" className="section-padding bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Catalog</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            Discography
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {releases.map((release, i) => (
            <motion.div
              key={release.title}
              className="card-gold p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Music className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-4xl font-bold text-white/10">{release.year}</span>
              </div>

              <p className="font-accent text-xs tracking-[0.2em] uppercase text-primary mb-1 font-semibold">{release.type}</p>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2 group-hover:text-primary transition-colors">
                {release.title}
              </h3>
              {release.tracks && (
                <p className="text-text-muted text-sm mb-4">{release.tracks}</p>
              )}

              <div className="flex gap-2 mt-auto pt-4">
                {Object.entries(release.links).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 text-text-muted text-xs font-accent tracking-wider hover:border-primary/30 hover:text-primary transition-all duration-300 rounded capitalize"
                  >
                    {platform}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Singles list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-bold uppercase text-text-muted mb-6">Singles & Features</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
            {singles.map((single, i) => (
              <motion.div
                key={single.title}
                className="flex items-center justify-between py-3 border-b border-white/[0.04] group"
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <p className="text-sm text-text-primary group-hover:text-primary transition-colors truncate pr-4">
                  {single.title}
                </p>
                <span className="font-accent text-xs text-text-dim flex-shrink-0">{single.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
