import { useState } from "react";
import { Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Classic Haircut",
    desc: "Clean, timeless cut tailored to your face shape.",
    price: "K30",
    time: "30 min",
    category: "Treatments",
    image: "/cuts/andre.jpg",
  },
  {
    title: "Skin Fade",
    desc: "Sharp modern fade blended down to the skin.",
    price: "K12",
    time: "40 min",
    category: "Treatments",
    image: "/cuts/bold.jpg",
  },
  {
    title: "Taper Fade",
    desc: "Low-maintenance clean fade around neckline.",
    price: "K11",
    time: "35 min",
    category: "Premium",
    image: "/cuts/fade.jpg",
  },
  {
    title: "Buzz Cut",
    desc: "Simple, even all-over cut for low-maintenance style.",
    price: "K8",
    time: "20 min",
    category: "Beard",
    image: "/cuts/taper.jpg",
  },
];

const categories = ["All", "Haircuts", "Beard", "Premium", "Treatments"];

export default function Services() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? services
      : services.filter((s) => s.category === active);

  return (
    <section className="relative py-24 px-6">

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.22em] uppercase text-zinc-600 mb-4">
            KingsCuts Barbershop
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight mb-3">
            Our <em className="italic text-amber-400">services</em>
          </h1>
          <p className="text-zinc-600 text-xs tracking-[0.08em]">
            Premium grooming crafted for modern men
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-[11px] tracking-[0.1em] uppercase border transition-all duration-200 ${
                active === cat
                  ? "bg-amber-400 border-amber-400 text-black font-bold"
                  : "border-zinc-800 text-zinc-600 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID — shared-border layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 border border-zinc-800/60 divide-y divide-zinc-800/60 md:divide-x"
          >
            {filtered.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                className={[
                  "group flex items-start gap-5 p-7 transition-colors duration-200 hover:bg-zinc-900/60",
                  // reset divider for right column on mobile
                  i % 2 !== 0 ? "md:border-t-0" : "",
                ].join(" ")}
              >
                {/* Left — number + text */}
                <div className="flex-1 min-w-0">
                  <span
                    className="font-serif text-4xl font-light text-zinc-800 leading-none block mb-3 group-hover:text-zinc-700 transition-colors"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-300 mb-2 group-hover:text-white transition-colors">
                    {s.title}
                  </h2>

                  <p className="text-zinc-600 text-xs leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-zinc-700 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {s.time}
                    </div>
                    <span className="text-[9px] tracking-[0.12em] uppercase text-zinc-800 border border-zinc-800 px-2 py-0.5 rounded-sm">
                      {s.category}
                    </span>
                  </div>
                </div>

                {/* Right — price + image */}
                <div className="flex flex-col items-end shrink-0">
                  <p className="font-serif text-4xl font-light text-amber-500 leading-none">
                    {s.price}
                  </p>
                  <p className="text-[9px] tracking-[0.1em] uppercase text-zinc-700 mt-0.5 mb-3">
                    from
                  </p>
                  <div className="relative w-16 h-16">
                    <motion.img
                      src={s.image}
                      alt={s.title}
                      className="w-16 h-16 rounded-sm object-cover border border-zinc-800/60"
                      whileHover={{
                        scale: 5,
                        x: -40,
                        y: -20,
                        zIndex: 50,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}