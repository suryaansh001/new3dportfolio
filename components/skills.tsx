"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "C/C++", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Django", "Flask", "FastAPI", "Express.js"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Vector Databases"],
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "LangChain", "Computer Vision", "NLP"],
  },
  {
    category: "DevOps/Tools",
    skills: ["Docker", "Linux", "Git", "GitHub", "AWS", "Vercel"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-8 md:px-12 md:py-24 bg-gradient-to-b from-zinc-950 to-black">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-6xl mx-auto"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-purple-400 mb-4">06 — SKILLS</p>
        <h2 className="font-sans text-4xl md:text-5xl font-light italic">Technical Expertise</h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            className="group"
          >
            <h3 className="font-sans font-light text-lg mb-4 text-purple-300 group-hover:text-pink-300 transition-colors">
              {category.category}
            </h3>

            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group/skill"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 group-hover/skill:scale-150 transition-transform" />
                  <span className="text-sm text-white/80 font-light">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
