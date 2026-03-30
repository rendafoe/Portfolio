"use client";

import { useRef } from "react";
import Image from "next/image";
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
          {/* Sticky label + headshot column */}
          <div className="lg:pt-1">
            <div className="sticky top-24 flex flex-row lg:flex-col gap-6 lg:gap-0 items-center lg:items-start">
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0}
                variants={fadeUp}
                className="label-caps lg:mb-6"
              >
                About
              </motion.p>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
                variants={fadeUp}
                className="w-20 lg:w-full flex-shrink-0"
              >
                <Image
                  src="/port-headshot2.png"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                  alt="Brian Brown"
                  sizes="(max-width: 1024px) 80px, 200px"
                />
              </motion.div>
            </div>
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
                {para.split(/\*\*(.+?)\*\*/g).map((chunk, j) =>
                  j % 2 === 1 ? <strong key={j}>{chunk}</strong> : chunk
                )}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
