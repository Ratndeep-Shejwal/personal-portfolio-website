import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experience = [
    {
        period: 'Dec 2025 — Present',
        role: 'Executive Web Developer',
        company: 'ET Edge (Times Group)',
        points: [
            'Single-handedly designed and shipped a cross-platform mobile app (Flutter) for iOS and Android, live on the App Store and Google Play.',
            'Built the app\'s backend (Express.js, PostgreSQL) and a custom React admin dashboard for event management and QR-code digital passes.',
            'Developed jury voting and nomination dashboards, and maintain React + WordPress CMS event websites for major summits.',
        ],
        tags: ['Flutter', 'React', 'Express.js', 'PostgreSQL'],
    },
    {
        period: 'Aug 2025 — Dec 2025',
        role: 'Frontend Developer',
        company: 'Kayana World',
        points: [
            'Engineered a full-scale UI/UX revamp of the partners admin dashboard using React.js and Tailwind CSS.',
            'Developed new dashboard modules including a booking system and Staff Shift Scheduling tool, and spearheaded a merchant admin platform using Laravel.',
            'Maintained and enhanced the legacy Kayadmin platform (CodeIgniter), resolving bugs and shipping feature enhancements.',
        ],
        tags: ['React', 'Tailwind CSS', 'Laravel', 'CodeIgniter'],
    },
    {
        period: 'Jan 2025 — Jul 2025',
        role: 'PHP Developer Intern',
        company: 'Kayana World',
        points: [
            'Developed and enhanced custom WordPress themes and web ordering plugins from scratch using PHP, JavaScript and Bootstrap.',
            'Engineered a custom payment gateway plugin for WordPress, allowing businesses to feature Kayana as a payment provider.',
            'Implemented Custom Post Types (CPT) and complex functionality, improving load times and customer satisfaction.',
        ],
        tags: ['PHP', 'WordPress', 'JavaScript'],
    },
    {
        period: 'Jan 2024 — Dec 2024',
        role: 'Freelance Full Stack Developer',
        company: 'House of Couton',
        points: [
            'Managed the complete development lifecycle for 10+ full-stack projects, from concept and design to final deployment.',
            'Designed and implemented responsive UI/UX wireframes in Figma, building pixel-perfect frontends with React.js, Next.js and Tailwind CSS.',
            'Engineered backend solutions using Node.js and PHP, integrated with MySQL, PostgreSQL and MongoDB.',
        ],
        tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    },
]

export default function Experience() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.exp-heading', {
                y: 40, opacity: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
            })
            gsap.from('.exp-label', {
                y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
            })

            gsap.utils.toArray('.exp-row').forEach((row) => {
                gsap.from(row, {
                    y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: row, start: 'top 88%' },
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

      return (
    <section id='experience' ref={sectionRef} className="w-full bg-black">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-32">

        {/* Heading */}
        <p className="exp-label text-xs sm:text-sm font-medium text-red tracking-[0.2em] mb-3">
          CAREER
        </p>
        <h2 className="exp-heading font-heading font-black uppercase text-bg
                       text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-14 sm:mb-20 max-w-3xl">
          Experience
        </h2>

        {/* Experience list */}
        <div className="border-t border-bg/15">
          {experience.map((job, i) => (
            <div
              key={i}
              className="exp-row grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 border-b border-bg/15"
            >
              {/* Period */}
              <div className="lg:col-span-3">
                <span className="text-xs sm:text-sm font-medium text-bg/50 tracking-wide">
                  {job.period.toUpperCase()}
                </span>
              </div>

              {/* Role + company */}
              <div className="lg:col-span-4">
                <h3 className="font-heading font-semibold text-bg text-xl sm:text-2xl leading-tight">
                  {job.role}
                </h3>
                <p className="text-sm sm:text-base text-red font-medium mt-1">
                  {job.company}
                </p>
              </div>

              {/* Points + tags */}
              <div className="lg:col-span-5">
                <ul className="space-y-2 sm:space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="text-sm sm:text-base text-bg/70 leading-relaxed flex gap-2">
                      <span className="text-red shrink-0 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-bg/20 text-[10px] sm:text-xs
                                 font-medium text-bg/60 whitespace-nowrap"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}