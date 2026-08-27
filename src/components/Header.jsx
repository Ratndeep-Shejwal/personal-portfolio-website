import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY

      // Always show header near the top of the page
      if (currentY < 80) {
        setHidden(false)
        lastScrollY.current = currentY
        return
      }

      const scrollingDown = currentY > lastScrollY.current

      // Ignore tiny scroll jitters
      if (Math.abs(currentY - lastScrollY.current) > 5) {
        setHidden(scrollingDown)
        lastScrollY.current = currentY
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-bg transition-transform duration-500 ease-in-out
                 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 lg:py-5">
        {/* Left Nav - desktop only */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            
            <a  key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 xl:px-5 py-2 rounded-full text-sm font-medium text-text tracking-wide
                         hover:bg-black/5 transition-colors duration-300"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex items-center justify-center w-10 h-10 -ml-2 text-text"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo */}
        
        <a  href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 font-heading font-extrabold text-xl sm:text-2xl tracking-wide text-red"
        >
          RdDev.
        </a>

        {/* Right side - desktop only */}
        <div className="hidden lg:flex items-center gap-4">
          
          <a  href="mailto:ratndeepshejwal@gmail.com"
            className="text-sm text-text tracking-wide hover:text-red transition-colors duration-300 whitespace-nowrap"
          >
            ratndeepshejwal@gmail.com
          </a>
          
          <a  href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2 rounded-full text-sm font-medium bg-text text-bg
                       hover:bg-red transition-colors duration-300 whitespace-nowrap"
          >
            CONTACT ME
          </a>
        </div>

        {/* Mobile-only compact contact button */}
        
         <a href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="lg:hidden px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-text text-bg
                     hover:bg-red transition-colors duration-300"
        >
          CONTACT
        </a>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-bg transition-transform duration-500 ease-in-out lg:hidden
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 py-4">
          <span className="font-heading font-extrabold text-xl text-red">RdDev.</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-text"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start gap-2 px-5 sm:px-8 mt-6">
          {navItems.map((item) => (
            
            <a  key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="w-full py-4 text-3xl sm:text-4xl font-heading font-semibold text-text
                         border-b border-black/10 hover:text-red transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-5 sm:px-8 mt-8">
          
          <a  href="mailto:ratndeepshejwal@gmail.com"
            className="text-sm text-text tracking-wide hover:text-red transition-colors duration-300"
          >
            ratndeepshejwal@gmail.com
          </a>
        </div>
      </div>
    </header>
  )
}