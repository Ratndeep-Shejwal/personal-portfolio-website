import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const techs = [
  { name: 'React', slug: 'react', color: '2b2d42' },
  { name: 'Next.js', slug: 'nextdotjs', color: '2b2d42' },
  { name: 'Node.js', slug: 'nodedotjs', color: '2b2d42' },
  { name: 'Express', slug: 'express', color: '2b2d42' },
  { name: 'Flutter', slug: 'flutter', color: '2b2d42' },
  { name: 'WordPress', slug: 'wordpress', color: '2b2d42' },
  { name: 'Laravel', slug: 'laravel', color: '2b2d42' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '2b2d42' },
  { name: 'MongoDB', slug: 'mongodb', color: '2b2d42' },
  { name: 'MySQL', slug: 'mysql', color: '2b2d42' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '2b2d42' },
  { name: 'Git', slug: 'git', color: '2b2d42' },
]

export default function TechStack() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-heading', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      })
      gsap.from('.tech-track', {
        opacity: 0, y: 20, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const loopTechs = [...techs, ...techs]

  return (
    <section ref={sectionRef} className="w-full bg-bg pb-10 sm:pb-10 overflow-hidden">

      {/* Heading */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 mb-10 sm:mb-14">
        <p className="tech-heading text-xl sm:text-xl font-medium text-text tracking-[0.2em] text-center">
          TOOLS &amp; TECHNOLOGIES I WORK WITH
        </p>
      </div>

      {/* Carousel */}
      <div className="tech-track relative w-full">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 z-10
                        bg-gradient-to-r from-bg to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 z-10
                        bg-gradient-to-l from-bg to-transparent" />

        <div className="flex w-max">
          <div className="flex animate-tech-marquee">
            {loopTechs.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 shrink-0
                           w-[160px] sm:w-[220px] md:w-[260px] h-[90px] sm:h-[110px]
                           border-r border-text/10"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className="h-6 sm:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-xs sm:text-sm font-medium text-text/70 tracking-wide whitespace-nowrap">
                  {tech.name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}