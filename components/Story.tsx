'use client'

import { motion } from 'framer-motion'
import { MapPin, Music, Trophy, Film } from 'lucide-react'

const timeline = [
  {
    year: '2005',
    title: 'The Beginning',
    description: 'Won "You Got Served" dance competition at 13. Director X signed his group Rated PG. Performed in Rihanna\'s "Pon Di Replay" video.',
    icon: Trophy,
  },
  {
    year: '2016',
    title: 'P.O.M.E.',
    description: 'Debut mixtape "Product Of My Environment" drops on SoundCloud. Gritty trap-infused street tales amass 2M+ streams.',
    icon: Music,
  },
  {
    year: '2019',
    title: 'Major Moves',
    description: 'JV deal with Sony Music Canada/RECORDS LLC. Debut EP "The Swagged Out Pedestrian" releases. "Drop Top" lands on HBO Euphoria. Raptors anthem "Finals" hits 243K plays.',
    icon: Film,
  },
  {
    year: '2020-22',
    title: 'Evolution',
    description: 'Collab with Roy Woods on "Drugs & Love." Releases "Detour" (2021) exploring drill and synth-pop, then "Dangerous" (2022). The chameleon keeps evolving.',
    icon: Music,
  },
]

export function Story() {
  return (
    <section id="story" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Origin</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            The Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio text */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-text-primary leading-relaxed">
              Dubbed <span className="text-primary font-semibold">&ldquo;Toronto&apos;s One-Man Mosh Pit&rdquo;</span> by
              Complex, Swagger Rite grew up on the Southside Weston Road/Jane Street
              area of Toronto — a life of dualities. Success and heartbreak,
              hustling and blue-collar work, fame and dead ends.
            </p>
            <p className="text-text-muted leading-relaxed">
              His first taste of the industry came through dance. At 13, his group Rated PG
              won &ldquo;You Got Served&rdquo; and got signed by Director X — they performed
              in Rihanna&apos;s &ldquo;Pon Di Replay&rdquo; that same year. But dancing wasn&apos;t enough.
            </p>
            <p className="text-text-muted leading-relaxed">
              The self-described &ldquo;old soul&rdquo; draws from the Golden Era — Tupac,
              Bone Thugs-N-Harmony, Method Man, Big Daddy Kane — then channels it through
              the aggressive energy of Gucci Mane and Waka Flocka. The result: a versatile
              trap sound that shifts between gritty street anthems and Caribbean-flavored vibes.
            </p>
            <p className="text-text-muted leading-relaxed">
              Toronto ain&apos;t nothing sweet. Losing friends to the streets, being locked up,
              growing up with a single mom raising six kids, police harassment — it&apos;s all
              in the music. That&apos;s the product of his environment.
            </p>

            <div className="flex items-center gap-2 pt-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-accent text-sm tracking-wider text-text-dim font-semibold uppercase">
                Weston Road / Jane Street — Toronto
              </span>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative pl-8 border-l border-primary/20 space-y-10">
              {timeline.map((event, i) => {
                const Icon = event.icon
                return (
                  <motion.div
                    key={event.year}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[calc(1rem+5px)] top-0 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                    <p className="font-display text-lg font-bold text-primary">{event.year}</p>
                    <h4 className="font-display text-xl font-bold uppercase text-white mt-1">{event.title}</h4>
                    <p className="text-text-muted text-sm mt-2 leading-relaxed">{event.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
