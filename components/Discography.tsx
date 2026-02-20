'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

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
    type: 'EP',
    year: '2021',
    tracks: 'Drill, synth-heavy pop & hip-hop. Sony Music Canada.',
    links: { spotify: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR' },
  },
  {
    title: 'The Swagged Out Pedestrian',
    type: 'Debut EP',
    year: '2019',
    tracks: '5 Tracks: Mosh Pit, In Love With The K, Hottest Out, Drop Top, Top Guys',
    links: {
      spotify: 'https://open.spotify.com/artist/3QTjKzRi18DafuSJ1ZQlxR',
      apple: 'https://music.apple.com/us/artist/swagger-rite/1163312706',
    },
  },
  {
    title: 'P.O.M.E.',
    type: 'Mixtape',
    year: '2016',
    tracks: 'Product Of My Environment — 2M+ SoundCloud streams. Hosted by Charlie B.',
    links: { soundcloud: 'https://soundcloud.com/swaggsrite' },
  },
]

const singles = [
  { title: 'Merry Christmas', year: '2024' },
  { title: 'lonely. (w/ Eva Shaw & Yung Tory)', year: '2024' },
  { title: 'Off Camera', year: '2023' },
  { title: '47 Clips', year: '2023' },
  { title: 'Can I Live', year: '2023' },
  { title: 'Legs In the Air (w/ 10Tik)', year: '2023' },
  { title: 'Dangerous', year: '2022' },
  { title: 'Spicy', year: '2021' },
  { title: 'Compton ft. Sha Hustle & Eva Shaw', year: '2021' },
  { title: 'Drugs & Love ft. Roy Woods', year: '2020' },
  { title: 'Heart Broke Rockstar Sh*t', year: '2020' },
  { title: 'Sticky', year: '2020' },
  { title: 'Like That', year: '2020' },
  { title: 'SPLASH GOD ft. Lord Afrixana', year: '2020' },
  { title: 'Finals (Raptors Anthem)', year: '2019', note: '243K+ plays' },
  { title: 'In Love with the K ft. BlocBoy JB', year: '2019', note: '3.2M+ WSHH' },
  { title: 'Drop Top ft. Yella Beezy & Flipp Dinero', year: '2019', note: 'HBO Euphoria' },
  { title: 'Drop ft. Ski Mask the Slump God & Kid Buu', year: '2018' },
  { title: 'Ferragamo w/ $heed', year: '2016', note: 'Complex premiere' },
]

export function Discography() {
  return (
    <section id="discography" className="section-padding bg-surface relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase text-white leading-none">
            Discography
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {releases.map((release, i) => (
            <motion.div
              key={release.title}
              className="card-gold p-5 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-accent text-[10px] tracking-[0.3em] uppercase text-primary font-bold">
                  {release.type}
                </span>
                <span className="font-display text-3xl font-bold text-white/10">{release.year}</span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-primary transition-colors mb-1">
                {release.title}
              </h3>
              {release.tracks && (
                <p className="text-text-muted text-sm mb-4">{release.tracks}</p>
              )}

              <div className="flex gap-2 mt-auto pt-3">
                {Object.entries(release.links).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 text-text-muted text-xs font-accent tracking-wider hover:border-primary/30 hover:text-primary transition-all duration-300 capitalize"
                  >
                    {platform}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Singles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold uppercase text-text-dim mb-6">Singles & Features</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
            {singles.map((single, i) => (
              <motion.div
                key={single.title}
                className="flex items-center justify-between py-2.5 border-b border-white/[0.04] group"
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
              >
                <div className="flex items-center gap-2 min-w-0 flex-1 pr-4">
                  <p className="text-sm text-text-primary group-hover:text-primary transition-colors truncate">
                    {single.title}
                  </p>
                  {'note' in single && single.note && (
                    <span className="flex-shrink-0 px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary font-accent text-[9px] tracking-wider uppercase font-bold">
                      {single.note}
                    </span>
                  )}
                </div>
                <span className="font-accent text-xs text-text-dim flex-shrink-0">{single.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
