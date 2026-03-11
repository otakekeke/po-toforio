import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const PROJECT_KEYS = [
  'chant', 'rehab', 'rehabAssign', 'reqBot',
  'puzzleGen', 'bizApps', 'instaDM', 'lp',
] as const

const FILTERS = [
  { key: 'all', tKey: 'filterAll' },
  { key: 'care', tKey: 'filterCare' },
  { key: 'biz', tKey: 'filterBiz' },
  { key: 'auto', tKey: 'filterAuto' },
] as const

export default function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const filtered = PROJECT_KEYS.filter((key) => {
    if (filter === 'all') return true
    return t(`projects.items.${key}.category`) === filter
  })

  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('projects.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex flex-wrap gap-2">
            {FILTERS.map(({ key, tKey }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  filter === key
                    ? 'border-primary bg-primary text-white'
                    : 'border-border text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {t(`projects.${tKey}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((key) => (
              <motion.article
                key={key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="mb-3 text-lg font-semibold tracking-tight">
                    {t(`projects.items.${key}.title`)}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {t(`projects.items.${key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(t(`projects.items.${key}.tags`) as string).split(', ').map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
