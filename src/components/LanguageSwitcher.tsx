import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const isJa = i18n.language === 'ja'

  return (
    <button
      onClick={() => i18n.changeLanguage(isJa ? 'en' : 'ja')}
      className="relative flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium tracking-wide text-muted transition-colors hover:border-primary hover:text-primary"
      aria-label="Toggle language"
    >
      <span className={isJa ? 'text-primary' : 'text-muted/40'}>JA</span>
      <span className="text-border">/</span>
      <span className={!isJa ? 'text-primary' : 'text-muted/40'}>EN</span>
      <motion.div
        className="absolute bottom-0.5 h-0.5 w-3 rounded-full bg-accent"
        animate={{ x: isJa ? -10 : 10 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  )
}
