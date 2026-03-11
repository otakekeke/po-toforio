import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-surface px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('contact.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-md text-lg text-muted">
            {t('contact.message')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://otakekeke.github.io/landing-page/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              <span>{t('contact.lp')}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
