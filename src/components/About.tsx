import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import ScrollReveal from './ScrollReveal'

function AnimatedValue({ rawValue }: { rawValue: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('\u00A0')

  const match = rawValue.match(/^([^0-9]*)([0-9,]+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const numStr = match?.[2] ?? ''
  const suffix = match?.[3] ?? ''
  const target = parseInt(numStr.replace(/,/g, ''), 10)

  useEffect(() => {
    if (!isInView) return
    if (isNaN(target)) {
      setDisplay(rawValue)
      return
    }

    const duration = 1400
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setDisplay(prefix + current.toLocaleString() + suffix)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, target, rawValue, prefix, suffix])

  return <span ref={ref}>{display}</span>
}

const STAT_KEYS = ['users', 'projects', 'clients'] as const

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('about.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-primary/80">
            {t('about.description')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STAT_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={0.15 + i * 0.1}>
              <div className="border-t border-border pt-6">
                <p className="mb-1 text-xs font-medium tracking-wider text-muted uppercase">
                  {t(`about.stats.${key}`)}
                </p>
                <p className="text-4xl font-bold tracking-tight">
                  <AnimatedValue rawValue={t(`about.stats.${key}Value`)} />
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
