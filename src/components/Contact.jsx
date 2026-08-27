import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FORM_ENDPOINT = 'https://formspree.io/f/mgaewbwa'

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-label', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.from('.contact-heading', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.from('.contact-form', {
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from('.contact-info > *', {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='contact' ref={sectionRef} className="w-full bg-bg">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-32">

        <p className="contact-label text-xs sm:text-sm font-medium text-text/50 tracking-[0.2em] mb-3 text-center lg:text-left">
          GET IN TOUCH
        </p>
        <h2 className="contact-heading font-heading font-black uppercase text-red
                       text-4xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-14 sm:mb-20
                       text-center lg:text-left">
          Let's Build<br className="hidden sm:block" /> Something Great
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: info */}
          <div className="contact-info lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <p className="text-xs font-medium text-text/50 tracking-wide mb-2">EMAIL</p>
              
               <a href="mailto:ratndeepshejwal@gmail.com"
                className="text-lg sm:text-xl font-heading font-semibold text-text hover:text-red transition-colors duration-300 break-all"
              >
                ratndeepshejwal@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-medium text-text/50 tracking-wide mb-2">PHONE</p>
              
              <a  href="tel:+917888128924"
                className="text-lg sm:text-xl font-heading font-semibold text-text hover:text-red transition-colors duration-300"
              >
                +91 78881 28924
              </a>
            </div>

            <div>
              <p className="text-xs font-medium text-text/50 tracking-wide mb-2">LOCATION</p>
              <p className="text-lg sm:text-xl font-heading font-semibold text-text">
                Maharashtra, India
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/in/ratndeep" target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn"
                 className="w-11 h-11 rounded-full border border-text/15 flex items-center justify-center
                            text-text hover:bg-red hover:text-bg transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>

              <a href="https://github.com/ratndeep" target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub"
                 className="w-11 h-11 rounded-full border border-text/15 flex items-center justify-center
                            text-text hover:bg-red hover:text-bg transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.17v3.21c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              <a href="mailto:ratndeepshejwal@gmail.com" aria-label="Email"
                 className="w-11 h-11 rounded-full border border-text/15 flex items-center justify-center
                            text-text hover:bg-red hover:text-bg transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </a>

              <a href="tel:+917888128924" aria-label="Phone"
                 className="w-11 h-11 rounded-full border border-text/15 flex items-center justify-center
                            text-text hover:bg-red hover:text-bg transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6 sm:gap-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-text/20 py-3 sm:py-4
                               text-base sm:text-lg text-text placeholder:text-text/40
                               focus:outline-none focus:border-red transition-colors duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-text/20 py-3 sm:py-4
                               text-base sm:text-lg text-text placeholder:text-text/40
                               focus:outline-none focus:border-red transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-text/20 py-3 sm:py-4
                             text-base sm:text-lg text-text placeholder:text-text/40 resize-none
                             focus:outline-none focus:border-red transition-colors duration-300"
                />
              </div>

              <div className="flex items-center gap-5 mt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full
                             bg-text text-bg font-medium text-sm sm:text-base
                             hover:bg-red transition-colors duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                  {status !== 'loading' && <span>↗</span>}
                </button>

                {status === 'success' && (
                  <span className="text-sm text-green-600 font-medium">
                    Thanks! I'll get back to you soon.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-sm text-red font-medium">
                    Something went wrong. Try again or email me directly.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}