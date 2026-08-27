import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Full-Stack Web Development',
    desc: 'End-to-end product builds using React, Next.js and Node.js — from architecture and APIs to deployment on Vercel or Render.',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    desc: 'Cross-platform apps built with Flutter, shipped to the App Store and Google Play, backed by custom Express.js and PostgreSQL APIs.',
  },
  {
    number: '03',
    title: 'CMS & WordPress Solutions',
    desc: 'Custom WordPress themes, plugins and CPT-driven sites, plus headless setups pairing WordPress with React front-ends.',
  },
  {
    number: '04',
    title: 'Dashboards & Admin Panels',
    desc: 'Custom internal tools — event management, jury voting, booking systems — built with React, Tailwind CSS and REST APIs.',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from('.services-desc', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from('.services-btn', {
        y: 15, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
      gsap.from('.service-row', {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-list', start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id='services' ref={sectionRef} className="w-full bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36">

        {/* Heading */}
        <h2 className="services-heading font-heading font-black uppercase text-red
                       text-3xl sm:text-5xl mb-5 md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          Let's Build Products That Actually Ship
        </h2>

        {/* Description + CTA */}
        <div className="flex flex-col lg:flex-row lg:justify-end">
          <div className="max-w-md lg:text-left">
            <p className="services-desc text-sm sm:text-base text-bg/70 leading-relaxed">
              I turn complex product ideas into fast, reliable web and mobile experiences —
              combining clean architecture with practical UI decisions that hold up in
              production, not just in Figma.
            </p>

            
             {/* <a href="#services-details"
              className="services-btn inline-flex items-center justify-center mt-8 px-7 py-3 rounded-full
                         border border-bg/40 text-sm font-medium text-bg
                         hover:bg-bg hover:text-text transition-colors duration-300"
            >
              View All Services
            </a> */}
          </div>
        </div>

        {/* Services list */}
        <div className="services-list mt-16 sm:mt-20 border-t border-bg/15">
          {services.map((service, i) => {
            const isOpen = openIndex === i
            return (
              <div key={service.number} className="service-row border-b border-bg/15">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-6 sm:py-7 text-left group"
                >
                  <div className="flex items-center gap-4 sm:gap-8 flex-1 min-w-0">
                    <span className="text-xs sm:text-sm text-bg/40 shrink-0">
                      ({service.number})
                    </span>
                    <span className="font-heading font-semibold text-bg
                                     text-lg sm:text-2xl md:text-3xl truncate
                                     group-hover:text-red transition-colors duration-300">
                      {service.title}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11
                               rounded-full border border-bg/30 text-bg text-lg
                               transition-transform duration-400 ease-out
                               ${isOpen ? 'rotate-45 bg-red border-red' : 'group-hover:border-bg'}`}
                  >
                    +
                  </span>
                </button>

                {/* Expandable description */}
                <div
                  className="grid transition-all duration-500 ease-in-out overflow-hidden"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 sm:pb-8 pl-0 sm:pl-[3.75rem] pr-10 text-sm sm:text-base text-bg/60 max-w-2xl leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}