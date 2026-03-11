import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Philosophy() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%'])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface px-6 py-32"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-20 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('philosophy.title')}
          </h2>
        </ScrollReveal>

        <div className="relative pl-8 sm:pl-12">
          {/* Animated vertical line */}
          <div className="absolute top-0 left-0 h-full w-px bg-border">
            <motion.div
              className="w-full bg-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            <ScrollReveal>
              <blockquote className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl lg:text-3xl">
                {t('philosophy.quote1')}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <blockquote className="text-xl font-medium leading-relaxed tracking-tight text-primary/70 sm:text-2xl lg:text-3xl">
                {t('philosophy.quote2')}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <blockquote className="text-lg leading-relaxed text-primary/60 sm:text-xl">
                {t('philosophy.quote3')}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed text-muted">
                {t('philosophy.belief')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-xl font-semibold text-accent sm:text-2xl">
                {t('philosophy.mission')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
