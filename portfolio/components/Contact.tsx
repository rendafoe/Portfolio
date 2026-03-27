"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contact } from "@/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Simple inline SVG icons
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-pad px-6 lg:px-12 border-t border-rule bg-accent"
    >
      <div className="max-w-content mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="label-caps text-background/50 sticky top-24"
          >
            Contact
          </motion.p>

          <div>
            {/* Headline */}
            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              variants={fadeUp}
              className="font-serif text-display-lg text-background mb-4"
            >
              {contact.headline}
            </motion.h2>

            {/* Subline */}
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
              variants={fadeUp}
              className="font-sans text-lg text-background/70 mb-12 max-w-lg leading-relaxed"
            >
              {contact.subline}
            </motion.p>

            {/* Links */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 bg-background text-accent font-sans font-medium px-7 py-3.5 text-sm tracking-wide hover:bg-background/90 transition-colors"
              >
                Email Me
                <span className="text-xs opacity-70">↗</span>
              </a>

              {/* Social links */}
              {contact.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-background/40 text-background font-sans font-medium px-5 py-3.5 text-sm tracking-wide hover:bg-background/10 transition-colors"
                >
                  {link.platform === "LinkedIn" ? <LinkedInIcon /> : <TwitterIcon />}
                  {link.label}
                </a>
              ))}

              {/* Resume */}
              <a
                href={contact.resumeUrl}
                download
                className="inline-flex items-center gap-2 border border-background/40 text-background font-sans font-medium px-5 py-3.5 text-sm tracking-wide hover:bg-background/10 transition-colors"
              >
                Download Resume
                <span className="text-xs opacity-70">PDF</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={4}
          variants={fadeUp}
          className="border-t border-background/20 mt-20 pt-8 flex flex-wrap justify-between items-center gap-4"
        >
          <span className="font-serif text-background/40 text-sm">
            Brian Brown
          </span>
          <span className="label-caps text-background/30" style={{ fontSize: "0.55rem" }}>
            Built with Next.js
          </span>
        </motion.div>
      </div>
    </section>
  );
}
