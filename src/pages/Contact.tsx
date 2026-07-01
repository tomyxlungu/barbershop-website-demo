import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Address",
    value: <>Cairo Road, Shop 4B<br />Lusaka, Zambia</>,
    href: "https://maps.google.com/?q=Cairo+Road+Lusaka+Zambia",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+260 97 123 4567",
    href: "tel:+260971234567",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.49a.5.5 0 00.614.612l5.747-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.523-5.2-1.433l-.372-.222-3.852 1.009 1.028-3.735-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+260 97 123 4567",
    href: "https://wa.me/260971234567",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Instagram",
    value: "@kingscutslusaka",
    href: "https://instagram.com/kingscutslusaka",
  },
];

const hours = [
  { day: "Mon – Fri", time: "09:00 – 21:00", today: true },
  { day: "Saturday",  time: "09:00 – 21:00", today: false },
  { day: "Sunday",    time: "09:00 – 17:00", today: false },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to your backend / EmailJS / Formspree here
    setSent(true);
  };

  return (
    <section className="min-h-screen text-white">

      {/* HERO */}
      <div className="relative text-center px-6 py-24 border-b border-zinc-800/60">
        {/* Corner brackets */}
        {[
          "top-4 left-4 border-t border-l",
          "top-4 right-4 border-t border-r",
        ].map((pos, i) => (
          <div key={i} className={`absolute w-8 h-8 border-amber-500/30 pointer-events-none ${pos}`} />
        ))}

        <motion.p
          {...fadeUp(0.1)}
          className="flex items-center justify-center gap-3 text-[9px] tracking-[0.25em] uppercase text-amber-500 mb-5"
        >
          <span className="block w-5 h-px bg-amber-500/60" />
          Get in touch
          <span className="block w-5 h-px bg-amber-500/60" />
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-serif text-6xl md:text-7xl font-light italic text-white leading-none mb-3"
        >
          Find us.
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-zinc-600 text-xs tracking-[0.1em]">
          Walk in or reach out — we're always ready
        </motion.p>
      </div>

      {/* BODY — info + form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">

        {/* LEFT — contact info + hours */}
        <motion.div {...fadeUp(0.15)} className="px-8 py-14 md:px-12">

          <p className="flex items-center gap-3 text-[9px] tracking-[0.22em] uppercase text-zinc-500 mb-8 after:flex-1 after:h-px after:bg-zinc-800/60">
            Contact info
          </p>

          <div className="space-y-7">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 border border-zinc-800 flex items-center justify-center text-amber-500 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-zinc-500 mb-1">{label}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-sm leading-relaxed hover:text-amber-400 transition-colors"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Hours */}
          <p className="flex items-center gap-3 text-[9px] tracking-[0.22em] uppercase text-zinc-500 mt-12 mb-6 after:flex-1 after:h-px after:bg-zinc-800/60">
            Hours
          </p>

          <div className="space-y-0 divide-y divide-zinc-800/40">
            {hours.map(({ day, time, today }) => (
              <div key={day} className="flex justify-between items-center py-3">
                <span className={`text-xs ${today ? "text-amber-400" : "text-zinc-600"}`}>
                  {today && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-700 mr-2 align-middle" />
                  )}
                  {day}
                </span>
                <span className={`text-xs ${today ? "text-amber-400" : "text-zinc-500"}`}>
                  {time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — message form */}
        <motion.div {...fadeUp(0.25)} className="px-8 py-14 md:px-12">

          <p className="flex items-center gap-3 text-[9px] tracking-[0.22em] uppercase text-zinc-400 mb-8 after:flex-1 after:h-px after:bg-zinc-800/60">
            Send a message
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start gap-4 py-8"
            >
              <div className="w-10 h-px bg-amber-500/60" />
              <p className="font-serif text-3xl font-light italic text-white">Message sent.</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                We'll get back to you on WhatsApp or phone shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-[10px] tracking-[0.18em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {[
                { id: "name",    label: "Your name",              type: "text", placeholder: "John Banda" },
                { id: "phone",   label: "Phone / WhatsApp",       type: "tel",  placeholder: "+260 97 000 0000" },
                { id: "service", label: "Service interested in",  type: "text", placeholder: "Skin fade, beard trim…" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-[9px] tracking-[0.18em] uppercase text-zinc-400 mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 focus:border-amber-500 pb-2.5 text-sm text-zinc-300 placeholder:text-zinc-800 outline-none transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[9px] tracking-[0.18em] uppercase text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Preferred day, time, or any questions…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-amber-500 pb-2.5 text-sm text-zinc-300 placeholder:text-zinc-800 outline-none resize-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 border border-zinc-700 hover:bg-amber-400 hover:border-amber-400 hover:text-black text-white text-[10px] tracking-[0.22em] uppercase px-8 py-3.5 transition-all duration-250"
              >
                Send message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      {/* MAP STRIP */}
      <div className="border-t border-zinc-800/60 relative h-40 overflow-hidden bg-zinc-950 flex items-center justify-center">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a1a 0.5px, transparent 0.5px), linear-gradient(90deg, #1a1a1a 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Pin */}
        <a
          href="https://maps.google.com/?q=Cairo+Road+Lusaka+Zambia"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex flex-col items-center gap-2 group"
        >
          <div className="w-2.5 h-2.5 " />
          <p className="text-[9px] tracking-[0.18em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
            KingsCuts
          </p>
          <p className="text-[10px] text-zinc-700 group-hover:text-zinc-400 transition-colors">
            Cairo Road, Lusaka — Open in Maps ↗
          </p>
        </a>
      </div>

    </section>
  );
}