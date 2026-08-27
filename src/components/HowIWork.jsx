import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discover\nand Define",
    desc: "We begin with a deep dive into your goals, users and constraints — turning a rough idea into a clear technical brief.",
    bg: "#d90429",
    text: "#f8f9fa",
    badgeBg: "#f8f9fa",
    badgeText: "#2b2d42",
  },
  {
    number: "02",
    title: "Design\nthe System",
    desc: "Architecture, data models and UI flows get mapped out before a single line of production code is written.",
    bg: "#f8f9fa",
    text: "#2b2d42",
    badgeBg: "#2b2d42",
    badgeText: "#f8f9fa",
  },
  {
    number: "03",
    title: "Build\nand Iterate",
    desc: "Fast, focused development sprints — React, Node, Flutter — with regular check-ins so nothing drifts off course.",
    bg: "#d90429",
    text: "#f8f9fa",
    badgeBg: "#f8f9fa",
    badgeText: "#2b2d42",
  },
  {
    number: "04",
    title: "Deliver\nand Support",
    desc: "Deployed, tested and monitored in production, with ongoing support after launch whenever you need it.",
    bg: "#f8f9fa",
    text: "#2b2d42",
    badgeBg: "#2b2d42",
    badgeText: "#f8f9fa",
  },
];

const offsets = [
  { x: 0, y: 0, rotate: 0 },
  { x: 14, y: 16, rotate: 1.5 },
  { x: -12, y: 32, rotate: -2 },
  { x: 16, y: 48, rotate: 1.5 },
];

export default function HowIWork() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.from(".hiw-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      cards.forEach((card, i) => {
        const o = offsets[i];
        gsap.set(card, {
          x: i === 0 ? o.x : o.x,
          y: i === 0 ? o.y : window.innerHeight,
          rotate: o.rotate,
          scale: i === 0 ? 1 : 0.96,
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.offsetHeight - window.innerHeight}`,
          scrub: true, // 1:1 tracking — no extra smoothing lag on top of Lenis
          pin: stickyRef.current,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        const o = offsets[i];
        tl.to(
          card,
          { y: o.y, x: o.x, rotate: o.rotate, scale: 1, ease: "none", force3D: true },
          i - 1,
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div ref={stickyRef} className="w-full h-screen overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 h-full flex flex-col justify-center py-8">
          <h2
            className="hiw-heading font-heading font-black uppercase text-red
                         text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-8 sm:mb-12"
          >
            How I Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center flex-1 min-h-0">
            <div className="hidden lg:block relative w-full h-[200px] sm:h-[300px] lg:h-[340px] overflow-hidden">
              <video
                src="/step-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: stacking cards */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 h-[260px] sm:h-[300px] lg:h-[320px] mb-16">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="absolute inset-0 will-change-transform"
                  style={{ zIndex: i + 1 }}
                >
                  {/* Shadow wrapper - static, not animated directly, avoids per-frame shadow repaint cost */}
                  <div
                    className="w-full h-full rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-6
                               border border-black/5"
                    style={{
                      backgroundColor: step.bg,
                      boxShadow: "0 20px 50px rgba(43,45,66,0.15)",
                    }}
                  >
                    {/* Left: number + badge */}
                    <div className="flex flex-col items-start shrink-0">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide mb-2 sm:mb-3"
                        style={{ backgroundColor: step.badgeBg, color: step.badgeText }}
                      >
                        STEP
                      </span>
                      <p
                        className="font-heading font-black text-4xl sm:text-5xl leading-none"
                        style={{ color: step.text }}
                      >
                        {step.number}
                      </p>
                    </div>

                    <div className="w-px self-stretch opacity-20" style={{ backgroundColor: step.text }} />

                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-heading font-black uppercase text-xl sm:text-2xl leading-[1.05] whitespace-pre-line mb-2 sm:mb-3"
                        style={{ color: step.text }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm leading-relaxed opacity-80"
                        style={{ color: step.text }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-text/15 mt-8 sm:mt-12 pt-4 sm:pt-5">
            <p className="text-xs sm:text-sm font-medium text-text/60 tracking-wide">
              HOW I WORK
            </p>
            <p className="hidden sm:block text-xs sm:text-sm font-medium text-text/60 tracking-wide">
              BUILDING PRODUCTS PEOPLE ACTUALLY USE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}