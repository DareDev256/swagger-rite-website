'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const timeline = [
  {
    year: '2005',
    title: 'The Beginning',
    description: 'Won "You Got Served" dance competition at 13. Director X signed his group Rated PG. Performed in Rihanna\'s "Pon Di Replay" and Sean Paul videos.',
  },
  {
    year: '2016',
    title: 'P.O.M.E.',
    description: 'Debut mixtape "Product Of My Environment" drops. Gritty trap-infused street tales amass 2M+ SoundCloud streams. "Ferragamo" premieres on Complex.',
  },
  {
    year: '2019',
    title: 'Sony Music',
    description: 'JV deal with Sony Music Canada/RECORDS LLC. "The Swagged Out Pedestrian" EP drops. "Drop Top" lands on HBO Euphoria. "In Love with the K" hits 3.2M on WSHH. "Finals" becomes the Raptors anthem.',
  },
  {
    year: '2020-22',
    title: 'Evolution',
    description: 'Collab with Roy Woods on "Drugs & Love." "Detour" EP explores drill and synth-pop. "Dangerous" drops. Featured on CBC\'s "Decade of Drake." The chameleon keeps evolving.',
  },
]

const pressQuotes = [
  {
    quote: "I don't sound like anything here. I'm just different — I can rap, I can sing, I can do a rock song... I'm just an all-around player.",
    source: 'Swagger Rite',
    via: 'Audible Treats',
  },
  {
    quote: "We had people freakin' doing CPR on each other in the middle of the whole shit.",
    source: 'Swagger Rite',
    via: 'Complex Canada',
  },
  {
    quote: "The EP operates best at maximum volume — over swirling, distorted, bass-drenched beats, Swagger assumes an authoritative presence.",
    source: 'Complex Canada',
    via: null,
  },
]

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden">
      {/* Background — Like That thumbnail */}
      <div className="absolute inset-0">
        <img
          src="https://img.youtube.com/vi/w1xx79_hYwg/maxresdefault.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(70%) contrast(1.1) brightness(0.1)' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />

      <div className="relative z-10 max-w-6xl mx-auto section-padding">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase text-white leading-none">
            The Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-text-primary leading-relaxed">
              Dubbed <span className="text-primary font-bold">&ldquo;Toronto&apos;s One-Man Mosh Pit&rdquo;</span> by
              Complex, Swagger Rite grew up on the Southside Weston Road/Jane Street
              area of Toronto &mdash; a life of dualities. Success and heartbreak,
              hustling and blue-collar work, fame and dead ends.
            </p>
            <p className="text-text-muted leading-relaxed">
              His first taste of the industry came through dance. At 13, his group Rated PG
              won &ldquo;You Got Served&rdquo; and got signed by Director X &mdash; they performed
              in Rihanna&apos;s &ldquo;Pon Di Replay&rdquo; that same year.
            </p>
            <p className="text-text-muted leading-relaxed">
              The self-described &ldquo;old soul&rdquo; draws from the Golden Era &mdash; Tupac,
              Bone Thugs-N-Harmony, Method Man, Big Daddy Kane &mdash; then channels it through
              the aggressive energy of Gucci Mane and Waka Flocka. The result: a versatile
              sound that shifts between gritty street anthems, Caribbean vibes, R&B, and rock.
            </p>

            <div className="flex items-center gap-2 pt-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-accent text-[10px] tracking-[0.3em] uppercase text-text-dim font-bold">
                Weston Road / Jane Street &mdash; Toronto
              </span>
            </div>

            {/* Press quotes */}
            <div className="pt-8 space-y-6">
              {pressQuotes.map((item, i) => (
                <motion.blockquote
                  key={i}
                  className="border-l-2 border-primary/30 pl-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <p className="text-text-muted text-sm italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-1 font-accent text-[10px] tracking-wider uppercase text-text-dim">
                    &mdash; {item.source}{item.via ? `, ${item.via}` : ''}
                  </p>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
              {timeline.map((event, i) => (
                <motion.div
                  key={event.year}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                >
                  <div className="absolute -left-[calc(1rem+5px)] top-0 w-3 h-3 bg-primary border-2 border-background" />
                  <p className="font-display text-lg font-bold text-primary">{event.year}</p>
                  <h4 className="font-display text-xl font-bold uppercase text-white mt-1">{event.title}</h4>
                  <p className="text-text-muted text-sm mt-2 leading-relaxed">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
