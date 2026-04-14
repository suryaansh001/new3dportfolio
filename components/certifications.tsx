"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
    issuer: "DeepLearning.AI",
    year: "2023",
    skills: ["Deep Learning Fundamentals", "Neural Networks", "TensorFlow Implementation"],
    link: "https://www.coursera.org/account/accomplishments/verify/BWHOFQD66HN7",
  },
  {
    id: 2,
    title: "Convolutional Neural Networks in TensorFlow",
    issuer: "DeepLearning.AI",
    year: "2023",
    skills: ["Image Processing", "CNN Architecture", "Computer Vision"],
    link: "https://www.coursera.org/account/accomplishments/verify/GFARU5OXTIE2",
  },
  {
    id: 3,
    title: "Machine Learning with Python",
    issuer: "IBM",
    year: "2023",
    skills: ["ML Algorithms", "Python Implementation", "Data Analysis"],
    link: "https://www.coursera.org/account/accomplishments/records/3G2DV9KL8BSC",
  },
  {
    id: 4,
    title: "Automate Cybersecurity Tasks with Python",
    issuer: "Google",
    year: "2023",
    skills: ["Python Automation", "Security Scripts", "Task Automation"],
    link: "https://www.coursera.org/account/accomplishments/records/QWACL9Z6UB5B",
  },
  {
    id: 5,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    year: "2023",
    skills: ["Security Fundamentals", "Threat Analysis", "Security Protocols"],
    link: "https://www.coursera.org/account/accomplishments/records/LRBQKGR3YLTJ",
  },
  {
    id: 6,
    title: "Penetration Testing, Threat Hunting, and Cryptography",
    issuer: "IBM",
    year: "2023",
    skills: ["Penetration Testing", "Threat Hunting", "Cryptography"],
    link: "https://www.coursera.org/account/accomplishments/records/DPJXNCHLHSJ5",
  },
  {
    id: 7,
    title: "Introduction to Virtual Reality",
    issuer: "University of London, Goldsmiths",
    year: "2023",
    skills: ["VR Development", "3D Interaction"],
    link: "https://www.coursera.org/account/accomplishments/records/YUE9MTMS3T4D",
  },
  {
    id: 8,
    title: "C for Everyone: Programming Fundamentals",
    issuer: "UC Santa Cruz",
    year: "2023",
    skills: ["Core Programming", "Data Structures", "Problem Solving"],
    link: "https://www.coursera.org/account/accomplishments/records/XR7ZWLN2HQSR",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-8 md:px-12 md:py-24 bg-gradient-to-b from-black to-zinc-950">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-6xl mx-auto"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-pink-400 mb-4">05 — CERTIFICATIONS</p>
        <h2 className="font-sans text-4xl md:text-5xl font-light italic">Professional Credentials</h2>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="group relative rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 overflow-hidden transition-all duration-300 p-6"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <Award className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-sans font-light text-lg group-hover:text-pink-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-purple-400 mt-1">{cert.issuer}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{cert.year}</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map(skill => (
                <span key={skill} className="text-[10px] px-2 py-1 rounded bg-pink-500/20 text-pink-300 border border-pink-400/30">
                  {skill}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-pink-400 hover:text-pink-300 transition-colors pt-4 border-t border-white/10"
            >
              <ExternalLink className="w-3 h-3" />
              View Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
