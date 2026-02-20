'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

const featuredVideos = [
  {
    id: '9fcQrtVvTrM',
    title: 'Drop Top',
    artist: 'ft. Yella Beezy & Flipp Dinero',
    badge: 'HBO Euphoria',
    description: 'The breakout hit. Featured on HBO\'s Euphoria S1E3. Chaotic heist visuals, six-figure coupes, dozens moshing.',
  },
  {
    id: 'INrj_wglZYo',
    title: 'Drugs & Love',
    artist: 'ft. Roy Woods',
    badge: 'Sony Music',
    description: 'Synth-heavy, moody collab. Roy Woods directorial debut. Signature Toronto hometown sound.',
  },
  {
    id: 'w1xx79_hYwg',
    title: 'Like That',
    artist: 'Swagger Rite',
    badge: null,
    description: 'White Rolls Royce Phantom convertible. Shot during lockdown in Toronto. Dir. Rodzilla.',
  },
]

const moreVideos = [
  { id: '3HchrfONBL8', title: 'Sticky', artist: 'Swagger Rite' },
  { id: '9R_34Ex6Amw', title: 'Spicy', artist: 'Swagger Rite' },
  { id: 'B9ZHlcQxUDs', title: 'Heart Broke Rockstar Sh*t', artist: 'Swagger Rite' },
  { id: 'vtkiOsr9K_s', title: 'Compton', artist: 'ft. Sha Hustle & Eva Shaw' },
  { id: 'A2nTCcsFM34', title: 'Weston Rd. Freestyle', artist: 'Swagger Rite' },
  { id: 'BXYJmWaqcug', title: 'Trap Dreams', artist: 'Swagger Rite' },
]

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="embed-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div
      className="video-thumb aspect-video bg-surface"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm border border-primary-light/30 hover:scale-110 transition-transform duration-300">
          <Play className="w-7 h-7 text-background ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  )
}

export function FeaturedMusic() {
  return (
    <section id="music" className="section-padding bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-4" />
          <h2 className="font-display text-6xl md:text-8xl font-bold uppercase text-white leading-none">
            Videos
          </h2>
        </motion.div>

        {/* Featured — full width */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-gold">
            <VideoEmbed videoId={featuredVideos[0].id} title={featuredVideos[0].title} />
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                {featuredVideos[0].badge && (
                  <span className="inline-block px-2 py-0.5 bg-primary/20 border border-primary/30 text-primary font-accent text-[10px] tracking-wider uppercase mb-2 font-bold">
                    {featuredVideos[0].badge}
                  </span>
                )}
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white">
                  {featuredVideos[0].title}
                </h3>
                <p className="text-text-muted text-sm mt-1">{featuredVideos[0].artist}</p>
                <p className="text-text-dim text-xs mt-2 max-w-xl">{featuredVideos[0].description}</p>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${featuredVideos[0].id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 border border-white/10 hover:border-primary/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-text-dim" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Two more featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredVideos.slice(1).map((video, i) => (
            <motion.div
              key={video.id}
              className="card-gold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <VideoEmbed videoId={video.id} title={video.title} />
              <div className="p-4">
                {video.badge && (
                  <span className="inline-block px-2 py-0.5 bg-primary/20 border border-primary/30 text-primary font-accent text-[10px] tracking-wider uppercase mb-2 font-bold">
                    {video.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-bold uppercase text-white">{video.title}</h3>
                <p className="text-text-muted text-xs mt-1">{video.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More videos thumbnail grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold uppercase text-text-dim mb-6">
            More Videos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {moreVideos.map((video, i) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="video-thumb aspect-video bg-surface">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center">
                      <Play className="w-4 h-4 text-background ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-display text-sm font-bold uppercase text-white group-hover:text-primary transition-colors truncate">
                    {video.title}
                  </p>
                  <p className="text-text-dim text-xs truncate">{video.artist}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
