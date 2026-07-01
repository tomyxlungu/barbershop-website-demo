import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Scissors,
  Info,
  Phone,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Scissors },
    { name: "About", path: "/about", icon: Info },
    { name: "Contacts", path: "/contacts", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold tracking-widest"
        >
          KC
        </Link>

        {/* Desktop ICON NAV */}
        <ul className="hidden md:flex items-center gap-10 text-white/70">
          {links.map((l) => {

            return (
              <li key={l.name} className="group relative">
                <Link
                  to={l.path}
                  className="flex flex-col items-center gap-1 hover:text-white transition"
                >
                  <span className="text-[10px] tracking-wider uppercase opacity-70 group-hover:opacity-100">
                    {l.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <ul className="flex flex-col gap-6 p-6 text-white/80">
              {links.map((l) => {
                const Icon = l.icon;

                return (
                  <li key={l.name}>
                    <Link
                      to={l.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-lg hover:text-white transition"
                    >
                      <Icon size={20} />
                      {l.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}