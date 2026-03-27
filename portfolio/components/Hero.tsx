"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hero } from "@/content";

// Rotating title lines
function RotatingTitle({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="h-8 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 text-accent font-sans font-medium tracking-wide"
        >
          {lines[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-12"
    >
      {/* Subtle drifting background accent shape */}
      <motion.div
        animate={{
          x: [0, 24, 0, -16, 0],
          y: [0, -16, 24, 8, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 rounded-full opacity-[0.04] bg-accent pointer-events-none"
        style={{ filter: "blur(80px)" }}
      />

      <div className="max-w-content mx-auto w-full pt-24 pb-16">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="label-caps mb-10"
        >
          Portfolio
        </motion.p>

        {/* Name — horizontal wipe reveal */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-display-xl text-ink leading-[0.95]"
          >
            {hero.name}
          </motion.h1>
        </div>

        {/* Title divider + rotating line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-accent block flex-shrink-0" />
          <RotatingTitle lines={hero.titleLines} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-xl lg:text-2xl text-ink-muted max-w-xl leading-relaxed mb-12"
        >
          {hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={hero.ctas.primary.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(hero.ctas.primary.href)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-accent text-background font-sans font-medium px-7 py-3.5 text-sm tracking-wide hover:bg-accent-light transition-colors"
          >
            {hero.ctas.primary.label}
            <span className="text-xs opacity-70">↓</span>
          </a>
          <a
            href={hero.ctas.secondary.href}
            download
            className="inline-flex items-center gap-2 border border-ink text-ink font-sans font-medium px-7 py-3.5 text-sm tracking-wide hover:bg-ink hover:text-background transition-colors"
          >
            {hero.ctas.secondary.label}
            <span className="text-xs opacity-70">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-6 lg:left-12 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-ink-faint"
        />
        <span className="label-caps" style={{ fontSize: "0.55rem" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
