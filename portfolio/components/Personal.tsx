"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Personal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="personal"
      className="section-pad px-6 lg:px-12 border-t border-rule"
    >
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="label-caps sticky top-24"
          >
            Running
          </motion.p>

          <div className="space-y-16 lg:space-y-20">
            {/* ── Running ── */}
            <div>
              <motion.h2
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
                variants={fadeUp}
                className="font-serif text-display-md text-ink mb-6"
              >
                {personal.running.headline}
              </motion.h2>

              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2}
                variants={fadeUp}
                className="font-sans text-lg text-ink-muted leading-relaxed max-w-2xl mb-10"
              >
                {personal.running.copy}
              </motion.p>

              {/* Running stats */}
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={3}
                variants={fadeUp}
                className="grid grid-cols-3 gap-px bg-rule border border-rule max-w-xl"
              >
                {personal.running.stats.map((stat) => (
                  <div key={stat.label} className="bg-background p-5">
                    <div className="font-serif text-2xl lg:text-3xl text-ink mb-1 leading-none">
                      {stat.value}
                    </div>
                    <div className="label-caps">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
