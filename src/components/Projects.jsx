import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tabs = ['Freelance', 'At ET Edge', 'At Kayana']

const projectsData = {
  Freelance: [
    {
      title: 'KorePOS',
      tags: ['React', 'UIUX', 'Design'],
      image: '/korepos.png',
      url: 'https://www.korepos.co.uk/',
    },
    {
      title: 'Nuopod Tech',
      tags: ['Next.js', 'UI/UX'],
      image: '/nuopod.png',
      url: 'https://nuopod.com/',
    },
    {
      title: 'Shivnarayan Jewellers',
      tags: ['PHP', 'UIUX'],
      image: '/shiv-narayan.png',
      url: 'https://shivnarayanjewellers.com/',
    },
  ],
  'At ET Edge': [
    {
      title: 'Bharat Lifesciences Awards 2026',
      tags: ['ReactJs', 'Node.js', 'PostgreSQL'],
      image: '/blsa.png',
      url: 'https://bharatlifesciencesawards.com/',
    },
    {
      title: 'ETNOW Global Business Summit',
      tags: ['PHP', 'Wordpress'],
      image: '/etnowgbs.png',
      url: 'https://etnowgbs.com/',
    },
    {
      title: 'C-Suite Titans',
      tags: ['ReactJs'],
      image: '/ictc.png',
      url: 'https://et-edge.com/conferences/ictc/',
    },
    {
      title: 'Rural Marketing Summit 2026',
      tags: ['ReactJs'],
      image: '/rms.png',
      url: 'https://et-edge.com/conferences/rural-marketing-summit/',
    },
  ],
  'At Kayana': [
    {
      title: 'Fresh Fuels Bar UK',
      tags: ['PHP', 'Wordpress'],
      image: '/freshfuel.png',
      url: 'https://freshfuelbar.com/',
    },
    {
      title: 'Chicken Bros UK',
      tags: ['PHP', 'Wordpress'],
      image: '/chicken-bros.png',
      url: 'https://chickenbros.co.uk/',
    },
    {
      title: "Tiger's Den UK",
      tags: ['PHP', 'Wordpress'],
      image: '/tigerden.png',
      url: 'https://tigersden484.co.uk/',
    },
    {
      title: "MyMoes UK",
      tags: ['PHP', 'Wordpress'],
      image: '/mymoes.png',
      url: 'https://mymoes.uk/',
    },
  ],
}

export default function Projects() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const [activeTab, setActiveTab] = useState('Freelance')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.from('.projects-tabs', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from('.projects-cta', {
        y: 15, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate cards whenever the active tab changes
  useEffect(() => {
    if (!gridRef.current) return
    gsap.fromTo(
      gridRef.current.querySelectorAll('.project-card'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    )
  }, [activeTab])

  const activeProjects = projectsData[activeTab] || []

  return (
    <section id='work' ref={sectionRef} className="w-full bg-bg">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-32">

        {/* Heading + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="projects-heading font-heading font-black uppercase text-red
                         text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            Featured Projects
          </h2>

          
          <a  href="#all-projects"
            className="projects-cta shrink-0 self-start sm:self-auto inline-flex items-center justify-center
                       px-6 py-3 rounded-full border border-text/20 text-xs sm:text-sm font-medium text-text
                       hover:bg-text hover:text-bg transition-colors duration-300 whitespace-nowrap"
          >
            VIEW ALL PROJECTS
          </a>
        </div>

        {/* Tabs */}
        <div className="projects-tabs flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide
                         transition-colors duration-300 border
                         ${activeTab === tab
                           ? 'bg-text text-bg border-text'
                           : 'bg-transparent text-text/60 border-text/20 hover:border-text/50 hover:text-text'
                         }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects grid - 2 columns, wraps to more rows */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {activeProjects.map((project, i) => (
            
             <a key={`${activeTab}-${i}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] rounded-2xl overflow-hidden bg-text/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out
                             group-hover:scale-105"
                />
                {/* Hover overlay arrow */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12
                                rounded-full bg-bg/90 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                                transition-all duration-300 ease-out">
                  <span className="text-text text-lg">↗</span>
                </div>
              </div>

              {/* Title + tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-5 sm:mt-6">
                <h3 className="font-heading font-semibold text-text text-lg sm:text-xl md:text-2xl
                               group-hover:text-red transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full border border-text/15 text-[10px] sm:text-xs
                                 font-medium text-text/60 whitespace-nowrap"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {activeProjects.length === 0 && (
          <p className="text-text/50 text-center py-16">No projects added yet for this category.</p>
        )}
      </div>
    </section>
  )
}