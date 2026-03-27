"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about } from "@/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-pad px-6 lg:px-12 border-t border-rule">
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          {/* Sticky label column */}
          <div className="lg:pt-1">
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="label-caps sticky top-24"
            >
              About
            </motion.p>
          </div>

          {/* Content column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Large decorative quote mark */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="font-serif text-[8rem] leading-none text-accent/10 -mb-10 select-none"
              aria-hidden
            >
              &ldquo;
            </motion.div>

            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i + 1}
                variants={fadeUp}
                className="font-sans text-lg lg:text-xl text-ink leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
