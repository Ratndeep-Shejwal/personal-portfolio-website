import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync Lenis scroll position into ScrollTrigger every tick
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger calculations once everything (fonts, images, video) has settled
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    // Recalculate after the very first paint too, catches late layout shifts
    const t = setTimeout(refresh, 300)

    return () => {
      lenis.destroy()
      window.removeEventListener('load', refresh)
      clearTimeout(t)
    }
  }, [])

  return children
}