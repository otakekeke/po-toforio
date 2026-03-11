import { useRef, useCallback, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLElement>(null)
  const [domainIndex, setDomainIndex] = useState(0)

  const domains = t('hero.domains', { returnObjects: true }) as string[]

  useEffect(() => {
    const interval = setInterval(() => {
      setDomainIndex((prev) => (prev + 1) % domains.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [domains.length])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative z-10 text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-6 text-lg font-medium text-primary/80 sm:text-xl"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex h-8 items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={domainIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-sm font-medium tracking-[0.15em] text-accent uppercase sm:text-base"
            >
              {domains[domainIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group flex flex-col items-center gap-2 text-xs font-medium tracking-[0.15em] text-muted uppercase transition-colors hover:text-primary"
          >
            {t('hero.scroll')}
            <motion.span
              className="block h-8 w-px bg-current"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
