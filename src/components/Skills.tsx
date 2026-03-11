import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

interface SkillCategory {
  tKey: string
  items: string[]
}

const SKILLS: SkillCategory[] = [
  {
    tKey: 'frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    tKey: 'backend',
    items: ['Google Apps Script', 'Node.js', 'Vercel', 'Neon PostgreSQL', 'Spreadsheet DB'],
  },
  {
    tKey: 'ai',
    items: ['Gemini API', 'OpenAI API', 'GPTs', 'Prompt Engineering'],
  },
  {
    tKey: 'tools',
    items: ['Git', 'GitHub', 'Playwright', 'Cursor', 'Figma'],
  },
  {
    tKey: 'management',
    items: ['Scrum', 'PMBOK', 'Requirements Definition', 'Quality Assurance', 'Team Lead'],
  },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="bg-surface px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-16 text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {t('skills.title')}
          </h2>
        </ScrollReveal>

        <div className="space-y-12">
          {SKILLS.map((category, ci) => (
            <ScrollReveal key={category.tKey} delay={ci * 0.08}>
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-primary">
                  {t(`skills.${category.tKey}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary/80 transition-colors hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
