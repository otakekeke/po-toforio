import { useState, useEffect } from 'react'

const SECTIONS = ['hero', 'about', 'values', 'projects', 'skills', 'timeline', 'contact']

export function useScrollSpy() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )

    for (const id of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}
