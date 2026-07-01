import { motion } from "framer-motion";
import { Scissors, Star, Clock, Users } from "lucide-react";

const features = [
  {
    num: "01",
    icon: <Scissors size={18} />,
    title: "Precision Cuts",
    desc: "Tailored fades and styles crafted for every face shape, every time.",
  },
  {
    num: "02",
    icon: <Star size={18} />,
    title: "Premium Quality",
    desc: "A luxury grooming experience — from the chair to the finish.",
  },
  {
    num: "03",
    icon: <Clock size={18} />,
    title: "On Time",
    desc: "We respect your schedule. Book it, trust it, show up ready.",
  },
  {
    num: "04",
    icon: <Users size={18} />,
    title: "Expert Barbers",
    desc: "Skilled professionals who bring technique and care to every cut.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen text-white">

      {/* HERO */}
      <div className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('/cuts/andre.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="hf-display text-5xl md:text-6xl font-semibold">
            About KingsCuts
          </h1>
          <p className="hf-body text-white/60 mt-4 tracking-widest uppercase text-sm">
            More than a haircut — it's confidence
          </p>
        </motion.div>
      </div>

{/* STORY */}
<div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

  {/* Image with floating badge */}
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <img
      src="/cuts/fade.jpg"
      alt="Barber at work"
      className="w-full h-[420px] object-cover rounded-sm border border-zinc-800/60"
    />
    {/* Floating amber badge */}
    <div className="absolute -bottom-4 -right-4 bg-amber-400 text-black text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2.5 rounded-sm">
      Est. 2014
    </div>
  </motion.div>

  {/* Text */}
  <motion.div
    initial={{ opacity: 0, x: 32 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="pl-2"
  >
    {/* Eyebrow */}
    <p className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-zinc-600 mb-5">
      <span className="block w-5 h-px bg-amber-500/60" />
      Our story
    </p>

    {/* Headline */}
    <h2 className="font-serif text-5xl font-light text-white leading-tight mb-6">
      Built for<br />
      the <em className="italic text-amber-400">kings</em><br />
      of this city.
    </h2>

    {/* Body */}
    <p className="text-zinc-600 text-sm leading-[1.9]">
      KingsCuts was built with one goal — to bring precision, style,
      and confidence to every client. Every fade, trim, and shave is
      crafted with attention to detail and modern technique.
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-zinc-800/60 my-7" />

    {/* Pull quote */}
    <blockquote className="border-l-2 border-amber-500 pl-5 font-serif text-xl font-light italic text-white/80 leading-relaxed">
      "We don't just cut hair.<br />
      We shape identity, confidence,<br />
      and presence."
    </blockquote>
  </motion.div>

</div>
      {/* FEATURES */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-600">
            Why KingsCuts
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* 2×2 editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={[
                "group relative flex items-start gap-5 p-6 transition-colors duration-200 hover:bg-zinc-900/60",
                // top border on rows 2+
                i >= 2 ? "border-t border-zinc-800/60" : "",
                // right border on left column
                i % 2 === 0 ? "md:border-r border-zinc-800/60" : "",
              ].join(" ")}
            >
              {/* Amber accent bar on hover */}
              <span className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-transparent group-hover:bg-amber-400 transition-colors duration-200" />

              {/* Large serif numeral */}
              <span
                className="font-serif text-[52px] font-light leading-none text-amber-500/50 group-hover:text-amber-400/80 transition-colors duration-200 select-none min-w-[44px] -mt-1"
                aria-hidden="true"
              >
                {f.num}
              </span>

              {/* Icon + text */}
              <div className="flex-1">
                <div className="text-amber-400 mb-2">{f.icon}</div>
                <h3 className="hf-body text-xs font-semibold uppercase tracking-widest text-white/90 mb-2 group-hover:text-white transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

{/* STATS */}
<div className="bg-zinc-900/40 border-y border-zinc-800 py-16">
  <div className="max-w-6xl mx-auto px-6">

    {/* Eyebrow */}
    <div className="flex items-center gap-4 mb-12">
      <div className="flex-1 h-px bg-zinc-800" />
      <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-600">
        By the numbers
      </span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>

    {/* Stats grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/60">
      {[
        { num: "5K", suffix: "+", label: "Clients served",     desc: "Happy clients who keep coming back." },
        { num: "10", suffix: "+", label: "Years in the game",  desc: "Over a decade of precision grooming." },
        { num: "4.9", suffix: "★", label: "Average rating",   desc: "Consistently rated best in Lusaka." },
        { num: "8",  suffix: "",  label: "Expert barbers",     desc: "A hand-picked team of skilled professionals." },
      ].map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="px-6 first:pl-0 last:pr-0"
        >
          {/* Amber accent bar */}
          <div className="w-5 h-0.5 bg-amber-500/60 rounded-full mb-4" />

          {/* Big serif number */}
          <p className="font-serif text-6xl font-light text-white leading-none mb-1">
            {s.num}
            <span className="text-amber-400 text-4xl">{s.suffix}</span>
          </p>

          {/* Label */}
          <p className="text-[10px] tracking-[0.15em] uppercase text-zinc-600 mt-3 mb-2">
            {s.label}
          </p>

          {/* Description */}
          <p className="text-zinc-600 text-xs leading-relaxed">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</div>

{/* CTA */}
<div className="relative overflow-hidden text-center py-24 px-6 border-t border-zinc-800/60">

  {/* Decorative corner rings */}
  <div className="pointer-events-none absolute -top-10 -left-10 w-32 h-32 rounded-full border border-zinc-800/60" />
  <div className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-zinc-800/60" />

  {/* Eyebrow */}
  <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-600 mb-6">
    KingsCuts Barbershop
  </p>

  {/* Amber rule */}
  <div className="w-10 h-px bg-amber-500/60 mx-auto mb-6" />

  {/* Headline */}
  <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-3">
    Your next cut<br />
    starts <em className="italic text-amber-400 not-italic">here.</em>
  </h2>

  <p className="text-zinc-600 text-sm tracking-wide mb-10">
    Walk in or book ahead — we're ready when you are.
  </p>

  {/* Buttons */}
  <div className="flex items-center justify-center gap-4 flex-wrap">
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold tracking-[0.12em] uppercase rounded-full transition-colors"
    >
      Book appointment
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300 text-xs tracking-[0.1em] uppercase rounded-full transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 2.5A1.5 1.5 0 013.5 1h1a1.5 1.5 0 011.5 1.5v1A1.5 1.5 0 014.5 5H4a8 8 0 005 5v-.5A1.5 1.5 0 0110.5 8h1A1.5 1.5 0 0113 9.5v1A1.5 1.5 0 0111.5 12C6.25 12 2 7.75 2 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
      Call us
    </motion.button>
  </div>

  {/* Hours badge */}
  <p className="mt-10 text-[11px] tracking-[0.08em] text-zinc-700">
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-700 mr-2 align-middle" />
    Open now &nbsp;·&nbsp; Mon – Sat 8am – 8pm &nbsp;·&nbsp; Sun 9am – 5pm
  </p>

</div>
    </section>
  );
}