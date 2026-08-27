import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const words = ['DEVELOPMENT', 'BRANDING', 'DESIGN', 'SEO']

export default function About() {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.about-label', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from('.about-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from('.about-card', {
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-card', start: 'top 85%' },
      })
      gsap.from('.about-text', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 85%' },
      })
      gsap.from('.about-link', {
        y: 15, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-link', start: 'top 90%' },
      })

      // Vertical word carousel — infinite scroll loop
      const wordEls = gsap.utils.toArray('.carousel-word')
      const wordHeight = wordEls[0]?.offsetHeight || 0

      gsap.set(carouselRef.current, { y: 0 })

      const loop = gsap.timeline({ repeat: -1 })
      words.forEach(() => {
        loop.to(carouselRef.current, {
          y: `-=${wordHeight}`,
          duration: 1.8,
          ease: 'power2.inOut',
        }).to({}, { duration: 1 }) // pause between words
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Duplicate list so the loop can scroll seamlessly then snap back
  const loopWords = [...words, ...words, words[0]]

  return (
    <section id='about' ref={sectionRef} className="w-full bg-bg overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10">

          {/* Left column */}
          <div>
            <p className="about-label text-sm font-medium text-text/60 tracking-wide mb-3">
              About me
            </p>
            <h2 className="about-heading font-heading font-black uppercase text-text
                           text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
              What I Do
            </h2>

            {/* Image card */}
            <div className="about-card relative mt-12 sm:mt-16 w-full max-w-[450px] aspect-[4/2] sm:aspect-rectangle
                            rounded-2xl overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #ff6a3d, #FF002BC7)' }}>
              <img
                src="/hero-photo.png"
                alt="Ratndeep Shejwal"
                className="absolute right-0 bottom-0 h-full w-auto object-cover object-bottom mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 flex flex-col justify-center pl-6 sm:pl-8">
                <p className="font-heading font-black uppercase text-2xl sm:text-4xl text-text leading-tight">
                  CODE_<br />BUILD<br />SHIP
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between">

            {/* Vertical word carousel */}
            <div
              className="relative h-16 sm:h-20 md:h-24 lg:h-28 overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
              }}
            >
              <div ref={carouselRef} className="flex flex-col">
                {loopWords.map((word, i) => (
                  <span
                    key={i}
                    className="carousel-word font-heading font-black uppercase text-red
                               text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none
                               h-16 sm:h-20 md:h-24 lg:h-28 flex items-center"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="about-text mt-10 lg:mt-0">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-text">
                I'm an Indian full-stack developer with over{' '}
                <strong className="font-semibold">1.5 years</strong> of experience.
                At the crossroads of{' '}
                <strong className="font-semibold">React, Node.js</strong> and{' '}
                <strong className="font-semibold">Flutter</strong>, the diversity of my
                skills allows me to take products from idea to deployment.
              </p>

              
              {/* <a  href="#about-details"
                className="about-link inline-flex items-center gap-1 mt-6 text-sm text-text/60
                           underline underline-offset-4 hover:text-red transition-colors duration-300"
              >
                More about me <span className="text-xs">↗</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}