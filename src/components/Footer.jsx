import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-marquee-wrap', {
        opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
      })
      gsap.from('.footer-col > *', {
        y: 20, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-cols', start: 'top 85%' },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="w-full bg-black overflow-hidden">

      {/* Marquee text at the top */}
      <div className="footer-marquee-wrap relative w-full overflow-hidden pointer-events-none select-none pt-14 sm:pt-20">
        <div className="flex whitespace-nowrap animate-footer-marquee">
          {Array(4).fill('RATNDEEP SHEJWAL • FULL STACK DEVELOPER • ').map((text, i) => (
            <span
              key={i}
              className="font-heading font-black text-red text-[16vw] sm:text-[11vw] lg:text-[9vw] leading-none px-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-16 sm:pt-20 pb-8">

        {/* Columns */}
        <div className="footer-cols grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 pb-14 sm:pb-20 border-t border-bg/15 pt-12 sm:pt-16">

          <div className="footer-col flex flex-col gap-3">
            <p className="text-xs font-semibold text-bg/50 tracking-wide mb-1">NAVIGATE</p>
            <a href="#home" className="text-sm text-bg/80 hover:text-red transition-colors duration-300">Home</a>
            <a href="#about" className="text-sm text-bg/80 hover:text-red transition-colors duration-300">About</a>
            <a href="#work" className="text-sm text-bg/80 hover:text-red transition-colors duration-300">Work</a>
            <a href="#contact" className="text-sm text-bg/80 hover:text-red transition-colors duration-300">Contact</a>
          </div>

          <div className="footer-col flex flex-col gap-3">
            <p className="text-xs font-semibold text-bg/50 tracking-wide mb-1">SOCIAL</p>
            <a href="https://in.linkedin.com/in/ratndeepshejwal" target="_blank" rel="noopener noreferrer"
               className="text-sm text-bg/80 hover:text-red transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/Ratndeep-Shejwal" target="_blank" rel="noopener noreferrer"
               className="text-sm text-bg/80 hover:text-red transition-colors duration-300">GitHub</a>
          </div>

          <div className="footer-col flex flex-col gap-3">
            <p className="text-xs font-semibold text-bg/50 tracking-wide mb-1">CONTACT</p>
            <a href="mailto:ratndeepshejwal@gmail.com"
               className="text-sm text-bg/80 hover:text-red transition-colors duration-300 break-all">
              ratndeepshejwal@gmail.com
            </a>
            <a href="tel:+917888128924"
               className="text-sm text-bg/80 hover:text-red transition-colors duration-300">
              +91 78881 28924
            </a>
          </div>

          <div className="footer-col flex flex-col gap-3">
            <p className="text-xs font-semibold text-bg/50 tracking-wide mb-1">LOCATION</p>
            <p className="text-sm text-bg/80">Maharashtra, India</p>
            <a href="/resume.pdf" download="Ratndeep_Shejwal_Resume.pdf"
               className="text-sm text-bg/80 hover:text-red transition-colors duration-300">
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center text-center justify-center gap-3 border-t border-bg/15 pt-6 pb-4 sm:pb-0">
          <p className="text-xs leading-6 text-bg/40">
            © {new Date().getFullYear()} Ratndeep Shejwal. All rights reserved. <br/> Designed &amp; built by Ratndeep
          </p>
        </div>
      </div>
    </footer>
  )
}
