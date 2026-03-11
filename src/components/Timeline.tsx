import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

const TIMELINE_KEYS = [
  '2021_bci',
  '2022_research',
  '2023_logistics',
  '2024_join',
  '2024_chant',
  '2025_takenoko',
  '2025_publishing',
  '2025_leader',
  '2026_now',
] as const

export default function Timeline() {
  const { t } = useTranslation()

  return (
    <section id="timeline" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-16 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('timeline.title')}
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute top-0 left-3 h-full w-px bg-border sm:left-1/2" />

          <div className="space-y-16">
            {TIMELINE_KEYS.map((key, i) => {
              const isLeft = i % 2 === 0

              return (
                <ScrollReveal
                  key={key}
                  delay={i * 0.06}
                  direction={isLeft ? 'left' : 'right'}
                >
                  <div className="relative flex items-start">
                    <div className="absolute left-3 z-10 -translate-x-1/2 sm:left-1/2">
                      <div className="h-3 w-3 rounded-full border-2 border-primary bg-white" />
                    </div>

                    <div
                      className={`ml-10 sm:ml-0 sm:w-1/2 ${
                        isLeft ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                      }`}
                    >
                      <p className="mb-1 text-xs font-medium tracking-wider text-accent">
                        {t(`timeline.items.${key}.date`)}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold tracking-tight">
                        {t(`timeline.items.${key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {t(`timeline.items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
