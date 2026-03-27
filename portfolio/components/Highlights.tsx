"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats, timeline } from "@/content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Highlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="highlights"
      className="section-pad px-6 lg:px-12 border-t border-rule bg-ink"
    >
      <div className="max-w-content mx-auto" ref={ref}>
        {/* Section header */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="label-caps text-ink-faint sticky top-24"
            >
              Highlights
            </motion.p>
          </div>
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="font-serif text-display-md text-background"
          >
            Proof of work.
          </motion.h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-muted/30 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              variants={fadeUp}
              className="bg-ink p-8 lg:p-10"
            >
              <div className="font-serif text-stat-xl text-background leading-none mb-3">
                {stat.value}
              </div>
              <div className="label-caps text-ink-faint">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-ink-muted/40 mb-16" />

        {/* Career timeline */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
            variants={fadeUp}
            className="label-caps text-ink-faint"
          >
            Career
          </motion.p>
          <div className="space-y-0">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.company + entry.years}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i + 6}
                variants={fadeUp}
                className="group border-t border-ink-muted/40 py-7 grid grid-cols-[auto_1fr] gap-6 lg:gap-12 items-start"
              >
                {/* Year badge */}
                <span className="font-sans text-xs text-ink-faint tabular-nums pt-1 whitespace-nowrap w-24">
                  {entry.years}
                </span>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="font-serif text-xl text-background">
                      {entry.role}
                    </span>
                    <span className="label-caps text-accent-light">
                      {entry.company}
                    </span>
                  </div>
                  {entry.descriptor && (
                    <p className="font-sans text-sm text-ink-faint leading-relaxed max-w-xl">
                      {entry.descriptor}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
            {/* Last rule */}
            <div className="border-t border-ink-muted/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
