import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

const VALUE_KEYS = ['surprise', 'teamplay', 'masterAi', 'minimal', 'care'] as const

export default function Values() {
  const { t } = useTranslation()

  return (
    <section id="values" className="bg-surface px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="mb-16 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('values.title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.07}>
              <div className="group rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
                <span className="mb-4 block text-4xl font-bold leading-none text-accent/15">
                  {t(`values.items.${key}.number`)}
                </span>
                <h3 className="mb-2 text-base font-semibold tracking-tight">
                  {t(`values.items.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`values.items.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
