"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "AI Intern",
    company: "Racketail Solutions Pvt. Ltd.",
    period: "May 2025 - July 2025",
    description: "Developed AI/ML models on healthcare datasets, PPE detection, speed detection, anomaly detection",
    skills: ["Machine Learning", "Computer Vision", "Healthcare AI"],
  },
  {
    id: 2,
    role: "Robotics Intern",
    company: "UV Patel College of Engineering",
    period: "June 2025",
    description: "Humanoid robotics with 17 DOF integration, hardware-software interaction",
    skills: ["Robotics", "Hardware Integration", "Control Systems"],
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "Ongoing",
    description: "Full-stack web apps with Next.js, Node.js, Express.js, MongoDB/PostgreSQL/MySQL",
    skills: ["Full-Stack Development", "Web Development", "Database Design"],
  },
  {
    id: 4,
    role: "Teaching Assistant",
    company: "JK Lakshmipat University",
    period: "Aug 2024 - Dec 2024",
    description: "Python workshops with NPTEL, programming assistance",
    skills: ["Teaching", "Python", "NPTEL"],
  },
  {
    id: 5,
    role: "General Secretary",
    company: "Council Of Technical Affairs - JKLU",
    period: "Ongoing",
    description: "Leading technical initiatives and coordinating activities",
    skills: ["Leadership", "Event Management", "Technical Coordination"],
  },
  {
    id: 6,
    role: "Co-Chair, Competitive Programming Club",
    company: "JK Lakshmipat University",
    period: "2023 - 2024",
    description: "Organized coding contests, mentored peers in algorithms",
    skills: ["Competitive Programming", "Mentoring", "Algorithm Design"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-8 md:px-12 md:py-24 bg-gradient-to-b from-zinc-950 to-black">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-5xl mx-auto"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-purple-400 mb-4">04 — EXPERIENCE</p>
        <h2 className="font-sans text-4xl md:text-5xl font-light italic">My Journey</h2>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`mb-12 relative flex ${index % 2 === 0 ? "flex-col" : "flex-col"}`}
          >
            {/* Timeline dot */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-4 border-zinc-950 relative z-10" />
                {index < experiences.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-purple-600/50 to-transparent" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 group cursor-pointer">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-lg border border-purple-400/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-pink-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <div>
                        <h3 className="font-sans text-lg font-light">{exp.role}</h3>
                        <p className="font-mono text-xs text-pink-400">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-white/70 mb-4">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
