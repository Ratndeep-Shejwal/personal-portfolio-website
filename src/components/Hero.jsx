import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(".hero-heading", { y: 40, opacity: 0, duration: 1 })
                .from(".hero-signature", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
                .from(
                    ".hero-social a",
                    { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 },
                    "-=0.5",
                )
                .from(".hero-image", { scale: 0.9, opacity: 0, duration: 1.2 }, "-=0.9")
                .from(
                    ".hero-right > *",
                    { y: 15, opacity: 0, stagger: 0.08, duration: 0.5 },
                    "-=0.7",
                )
                .from(
                    ".hero-badge",
                    { scale: 0, opacity: 0, duration: 0.7, ease: "back.out(1.7)" },
                    "-=0.4",
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" ref={heroRef} className="relative w-full overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                    {/* Left: intro text */}
                    <div className="lg:col-span-4 order-2 lg:order-1 text-center lg:text-left">
                        <h1 className="hero-heading font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-tight text-text">
                            Hello! I'm Ratndeep. a full-stack developer &amp; product builder
                            from India.
                        </h1>

                        <p className="hero-signature font-signature text-red text-5xl sm:text-6xl mt-6 leading-none">
                            Rshejwal
                        </p>

                        <div className="hero-social flex items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-10 lg:mt-16">
                            <a
                                href="https://in.linkedin.com/in/ratndeepshejwal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm font-medium text-text hover:text-red transition-colors duration-300"
                            >
                                LINKEDIN <span className="text-xs">↗</span>
                            </a>
                            <a
                                href="https://github.com/Ratndeep-Shejwal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm font-medium text-text hover:text-red transition-colors duration-300"
                            >
                                GITHUB <span className="text-xs">↗</span>
                            </a>
                            <a
                                href="mailto:ratndeepshejwal@gmail.com"
                                className="flex items-center gap-1 text-sm font-medium text-text hover:text-red transition-colors duration-300"
                            >
                                EMAIL <span className="text-xs">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Center: image */}
                    <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
                        <div className="hero-image relative w-[240px] sm:w-[320px] md:w-[400px] lg:w-full max-w-[420px] aspect-[3/4]">
                            <img
                                src="/hero-photo.png"
                                alt="Ratndeep Shejwal"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Right: tags + filler content */}
                    <div className="hero-right lg:col-span-4 order-3 flex flex-col items-center lg:items-end gap-6 lg:pt-4">
                        {/* Availability badge */}
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-text/15 text-xs sm:text-sm font-medium text-text">
                            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
                            AVAILABLE FOR WORK
                        </div>

                        {/* Skill tags */}
                        <div className="flex flex-wrap justify-center lg:justify-end gap-2 sm:gap-3">
                            <span className="px-4 py-2 rounded-full border border-text/15 text-xs sm:text-sm font-medium text-text">
                                REACT.JS
                            </span>
                            <span className="px-4 py-2 rounded-full border border-text/15 text-xs sm:text-sm font-medium text-text">
                                NODE.JS
                            </span>
                            <span className="px-4 py-2 rounded-full border border-text/15 text-xs sm:text-sm font-medium text-text">
                                FLUTTER
                            </span>
                            <span className="px-4 py-2 rounded-full border border-text/15 text-xs sm:text-sm font-medium text-text">
                                WORDPRESS
                            </span>
                            <span className="px-4 py-2 rounded-full border border-text/15 text-xs sm:text-sm font-medium text-text">
                                UI/UX
                            </span>
                        </div>

                        {/* Small stat block */}
                        <div className="text-center lg:text-right mt-2">
                            <p className="font-heading font-bold text-3xl sm:text-4xl text-text">
                                1.5+
                            </p>
                            <p className="text-xs sm:text-sm text-text/60 mt-1 max-w-[200px]">
                                Years of experience shipping full-stack products
                            </p>
                        </div>

                        {/* Download resume */}

                        <a
                            href="/ratndeep_resume.pdf"
                            download="Ratndeep_Shejwal_Resume.pdf"
                            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-text/15
                         hover:bg-text hover:border-text transition-colors duration-300"
                        >
                            <span className="font-medium text-sm text-text group-hover:text-bg transition-colors duration-300">
                                DOWNLOAD RESUME
                            </span>
                            <span
                                className="flex items-center justify-center w-6 h-6 rounded-full bg-red text-bg text-xs
                                group-hover:bg-bg group-hover:text-red transition-colors duration-300"
                            >
                                ↓
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom marquee bar - pulled up, feels part of hero */}
            <div className="relative w-full overflow-hidden pointer-events-none select-none mt-[-7rem]">
                <div className="relative flex items-center py-1 sm:py-2">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {Array(4)
                            .fill("BRANDING • DEVELOPMENT • DESIGN • ")
                            .map((text, i) => (
                                <span
                                    key={i}
                                    className="font-heading font-extrabold text-text/10 text-[14vw] sm:text-[10vw] lg:text-[8vw] leading-none px-4"
                                >
                                    {text}
                                </span>
                            ))}
                    </div>

                    {/* Let's Talk flower badge */}

                    {/* <a
                        href="#contact"
                        className="hero-badge pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-5
                       w-16 h-10 sm:w-25 sm:h-25 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-red rounded-[45%] rotate-12 blur-[1px]" />
                        <div className="absolute inset-0 bg-red rounded-[45%] -rotate-12" />
                        <span className="relative font-heading font-semibold text-bg text-xs sm:text-sm text-center leading-tight">
                            LET'S
                            <br />
                            TALK ↗
                        </span>
                    </a> */}
                </div>
            </div>
        </section>
    );
}
