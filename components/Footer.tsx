'use client'

export function Footer() {
  return (
    <footer className="px-4 py-6 bg-background border-t border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold tracking-wider text-text-dim uppercase">
            Swagger Rite
          </span>
          <span className="text-text-dim">&bull;</span>
          <span className="font-accent text-[10px] tracking-wider text-text-dim">Sony Music Canada</span>
        </div>
        <span className="font-accent text-[10px] tracking-wider text-text-dim">
          Built by{' '}
          <a
            href="https://daredev256.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors"
          >
            DareDev256
          </a>
        </span>
      </div>
    </footer>
  )
}
