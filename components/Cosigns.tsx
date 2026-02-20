'use client'

import { motion } from 'framer-motion'
import { Award, Tv, Music, Users } from 'lucide-react'

const achievements = [
  {
    icon: Tv,
    title: 'HBO Euphoria',
    description: '"Drop Top" featured in Season 1, Episode 3 of HBO\'s hit show starring Zendaya.',
  },
  {
    icon: Music,
    title: 'Sony Music Canada',
    description: 'JV signing with Sony Music Entertainment Canada/RECORDS LLC in 2019.',
  },
  {
    icon: Award,
    title: 'Veld Festival',
    description: 'Performed at one of Toronto\'s biggest music festivals alongside major acts.',
  },
  {
    icon: Users,
    title: 'CBC\'s Decade of Drake',
    description: 'Featured in CBC GEM documentary series exploring Drake\'s influence on Toronto artists.',
  },
]

const collabs = [
  'Roy Woods',
  'BlocBoy JB',
  'Yella Beezy',
  'Flipp Dinero',
  'Ski Mask the Slump God',
  'Kid Buu',
  'Eva Shaw',
  'Sha Hustle',
  'Lord Afrixana',
  'Seanpane',
  'SooDope',
]

export function Cosigns() {
  return (
    <section className="section-padding bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-primary mb-4 font-semibold">Credentials</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            Cosigns & Milestones
          </h2>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {achievements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="card-gold p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Collaborators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-2xl font-bold uppercase text-text-muted mb-6 text-center">Collaborators</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {collabs.map((name, i) => (
              <motion.span
                key={name}
                className="px-4 py-2 border border-white/[0.06] text-text-muted text-sm font-accent tracking-wider rounded-full hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
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
