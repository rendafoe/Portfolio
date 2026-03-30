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

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
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
                  {link.platform === "LinkedIn" ? <LinkedInIcon /> : link.platform === "GitHub" ? <GitHubIcon /> : <TwitterIcon />}
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
