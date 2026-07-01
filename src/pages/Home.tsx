import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from "../assets/chris-knight--ucnC7PMDqE-unsplash.jpg";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export default function Home() {
  return (
    <>
      <section
        className="relative w-full h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${images})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-0" />

        {/* ── LEFT VERTICAL TEXT ──────────────────────────────────────────── */}
        <motion.div
          {...fadeIn(0.8)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4"
        >
          <span
            className="hf-body text-white/45 text-[10px] tracking-[0.3em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            See more
          </span>
          <div className="w-px h-14 bg-white/25" />
        </motion.div>

        {/* ── RIGHT SOCIAL ICONS ──────────────────────────────────────────── */}
        <motion.div
          {...fadeIn(0.8)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3"
        >
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 border border-white/30 flex items-center justify-center text-white/55 hover:text-white hover:border-white/60 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 border border-white/30 flex items-center justify-center text-white/55 hover:text-white hover:border-white/60 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </motion.div>

        {/* ── CENTRE CONTENT ──────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pb-16 pt-24">

          <motion.h1
            {...fadeIn(0.25)}
            className="hf-display text-white italic font-semibold leading-none"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)", letterSpacing: "0.06em" }}
          >
            thomas
          </motion.h1>

          {/* Mustache ornament */}
          <motion.div {...fadeIn(0.4)} className="my-5 md:my-7">
            <svg
              viewBox="0 0 140 44"
              xmlns="http://www.w3.org/2000/svg"
              className="w-28 md:w-36 fill-white"
              aria-hidden="true"
            >
              <path d="M70 22 C58 7, 34 3, 8 15 C22 15, 33 20, 38 30 C43 20, 54 15, 70 22Z" />
              <path d="M70 22 C82 7, 106 3, 132 15 C118 15, 107 20, 102 30 C97 20, 86 15, 70 22Z" />
            </svg>
          </motion.div>

          <motion.p
            {...fadeIn(0.5)}
            className="hf-body text-white text-base md:text-xl font-light tracking-[0.38em] uppercase mb-10 md:mb-16"
          >
            For Men
          </motion.p>

          <motion.p
            {...fadeUp(0.62)}
            className="hf-body text-white/65 text-sm md:text-base font-light tracking-[0.18em] mb-10 md:mb-16"
          >
            Daily &nbsp; 09:00 – 21:00
          </motion.p>

          <motion.div {...fadeUp(0.78)}>
            <Link
              to="/booking"
              className="hf-body inline-block border border-white/80 text-white text-xs md:text-sm font-light tracking-[0.28em] uppercase px-14 md:px-20 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Appointment
            </Link>
          </motion.div>

        </div>

        {/* Bottom depth fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none" />
      </section>
    </>
  );
}