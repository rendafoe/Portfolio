"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { timeline, type TimelineEntry } from "@/content";

function BuildingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="0" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="0" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

function ExperienceCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border border-white/10 bg-white/[0.04]"
    >
      {/* Card body */}
      <div className="p-6 lg:p-8">
        {/* Role */}
        <h3 className="font-serif text-2xl text-background leading-tight mb-4">
          {entry.role}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-5 text-ink-faint">
          <span className="flex items-center gap-1.5 font-sans text-sm">
            <BuildingIcon />
            {entry.company}
          </span>
          <span className="flex items-center gap-1.5 font-sans text-sm">
            <CalendarIcon />
            {entry.years}
          </span>
          <span className="flex items-center gap-1.5 font-sans text-sm">
            <LocationIcon />
            {entry.location}
          </span>
        </div>

        {/* Summary */}
        <p className="font-sans text-sm text-ink-faint leading-relaxed">
          {entry.summary}
        </p>
      </div>

      {/* Toggle row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 lg:px-8 py-4 border-t border-white/10 text-background hover:bg-white/5 transition-colors"
      >
        <span className="font-sans text-sm font-medium">View Details</span>
        <ChevronIcon open={open} />
      </button>

      {/* Expanded bullets */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="bullets"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="px-6 lg:px-8 pb-7 pt-5 space-y-3 border-t border-white/10">
              {entry.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-sans text-sm text-ink-faint leading-relaxed"
                >
                  <span className="text-accent mt-0.5 shrink-0 select-none">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Highlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="highlights"
      className="section-pad px-6 lg:px-12 border-t border-rule bg-ink"
    >
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="label-caps text-ink-faint sticky top-24"
          >
            Experience
          </motion.p>

          <div className="flex flex-col">
            {timeline.map((entry, i) => (
              <div
                key={entry.company + entry.years}
                className={`flex gap-5 ${i < timeline.length - 1 ? "pb-4" : ""}`}
              >
                {/* Timeline column: dot + connecting line */}
                <div className="flex flex-col items-center shrink-0 w-4 pt-8">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 22, delay: i * 0.1 + 0.15 }}
                    className="w-3 h-3 rounded-full border-2 border-accent bg-ink shrink-0"
                  />
                  {i < timeline.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-1 w-px bg-gradient-to-b from-accent/40 to-accent/10 mt-2"
                      style={{ transformOrigin: "top" }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0">
                  <ExperienceCard entry={entry} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
