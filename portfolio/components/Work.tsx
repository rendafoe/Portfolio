"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, projectCategories, type ProjectCategory, type LinkType } from "@/content";

const WORK_LINK_ICONS: Record<Exclude<LinkType, "website">, string> = {
  tweet: "𝕏",
  article: "⊞",
};

const WORK_LINK_LABELS: Record<Exclude<LinkType, "website">, string> = {
  tweet: "Work",
  article: "Article",
};

function LinkBadge({ label, icon, url }: { label: string; icon: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 label-caps text-accent border border-accent/30 px-2.5 py-1 hover:bg-accent hover:text-background transition-colors"
    >
      <span>{icon}</span>
      {label}
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="section-pad px-6 lg:px-12 border-t border-rule">
      <div className="max-w-content mx-auto" ref={ref}>
        {/* Header row */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 mb-14">
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUp}
            className="label-caps sticky top-24"
          >
            Portfolio
          </motion.p>
          <div>
            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="font-serif text-display-md text-ink mb-8"
            >
              Selected products &amp; clients.
            </motion.h2>

            {/* Filter tabs */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`label-caps px-3 py-1.5 border transition-colors ${
                    activeFilter === cat
                      ? "bg-ink text-background border-ink"
                      : "border-rule text-ink-muted hover:border-ink-muted hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Card grid */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 2}
                  variants={fadeUp}
                  className="bg-background flex flex-col group hover:bg-[#F2EFE9] transition-colors"
                >
                  {/* Hero image */}
                  {project.image && (
                    <div className="w-full h-[160px] overflow-hidden border-b border-rule">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-8 flex flex-col gap-5 flex-1">
                    {/* Category */}
                    <span className="label-caps text-accent">{project.category}</span>

                    {/* Project name */}
                    <h3 className="font-serif text-2xl text-ink leading-tight">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-ink-muted leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Result highlight */}
                    {project.result && (
                      <div className="border-t border-rule pt-4">
                        <span className="font-sans text-sm font-medium text-ink">
                          ✦ {project.result}
                        </span>
                      </div>
                    )}

                    {/* Links */}
                    {(project.clientUrl || (project.workUrl && project.workLinkType) || project.testimonialUrl) && (
                      <div className="flex flex-wrap gap-2">
                        {project.clientUrl && (
                          <LinkBadge label="Website" icon="↗" url={project.clientUrl} />
                        )}
                        {project.workUrl && project.workLinkType && (
                          <LinkBadge
                            label={WORK_LINK_LABELS[project.workLinkType]}
                            icon={WORK_LINK_ICONS[project.workLinkType]}
                            url={project.workUrl}
                          />
                        )}
                        {project.testimonialUrl && (
                          <LinkBadge label="Testimonial" icon="❝" url={project.testimonialUrl} />
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Add More placeholder card */}
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={filtered.length + 2}
                variants={fadeUp}
                className="bg-background p-8 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-rule/60 min-h-[280px]"
              >
                <span className="text-4xl text-rule font-serif">+</span>
                <span className="label-caps text-ink-faint text-center">
                  More work available on request
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
