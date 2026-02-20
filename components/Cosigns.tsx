'use client'

import { motion } from 'framer-motion'

const achievements = [
  { title: 'HBO Euphoria', stat: 'S1E3', description: '"Drop Top" featured on the hit show' },
  { title: 'Sony Music', stat: 'JV Deal', description: 'Sony Music Canada / RECORDS LLC' },
  { title: 'WSHH', stat: '3.2M+', description: '"In Love with the K" premiere views' },
  { title: 'SoundCloud', stat: '243K+', description: '"Finals" Raptors anthem plays' },
  { title: 'Veld Festival', stat: 'Performer', description: 'Toronto\'s biggest music festival' },
  { title: 'CBC', stat: 'Featured', description: '"Decade of Drake" documentary series' },
]

const collabs = [
  'Roy Woods', 'BlocBoy JB', 'Yella Beezy', 'Flipp Dinero',
  'Ski Mask the Slump God', 'Kid Buu', 'Eva Shaw', 'Sha Hustle',
  'Yung Tory', '10Tik', 'Seanpane', 'SooDope', 'Lord Afrixana',
]

export function Cosigns() {
  return (
    <section className="section-padding bg-surface relative">
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
            Credentials
          </h2>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-gold p-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-primary leading-none">{item.stat}</p>
              <h3 className="font-display text-sm font-bold uppercase text-white mt-2">{item.title}</h3>
              <p className="text-text-dim text-xs mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Collaborators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-accent text-[10px] tracking-[0.3em] uppercase text-primary/70 mb-4 font-bold">
            Collaborators
          </p>
          <div className="flex flex-wrap gap-2">
            {collabs.map((name, i) => (
              <motion.span
                key={name}
                className="px-3 py-1.5 border border-white/[0.06] text-text-muted text-xs font-accent tracking-wider hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
