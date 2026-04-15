"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "University Placement Portal",
    description: "Comprehensive placement management system with role-based authentication, job applications, interview scheduling, and analytics dashboard",
    category: "Web Development",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "JWT", "Tailwind CSS"],
    image: "/projects/placementportal.webp",
    demo: "https://placement-portal-g3c8.vercel.app/auth/login",
    repo: "https://github.com",
  },
  {
    id: 2,
    title: "LLM Conversational AI Pipeline",
    description: "End-to-end conversational system integrating STT, emotion detection, LLM reasoning, and TTS with persistent memory for contextual interactions",
    category: "AI & ML",
    tech: ["FastAPI", "LLM", "Speech-to-Text", "Text-to-Speech", "NLP"],
  },
  {
    id: 3,
    title: "EfficientDet + YOLO Hybrid Model",
    description: "Hybrid object detection system integrating YOLO techniques into EfficientDet for improved real-time performance on LVIS dataset",
    category: "AI & ML",
    tech: ["EfficientDet", "YOLO", "Object Detection", "Computer Vision"],
    image: "/projects/efficientDET.png",
  },
  {
    id: 4,
    title: "Human Attention & Gaze Analysis (ViT-GPT2)",
    description: "Vision-language model using ViT + GPT2 for gaze-aware attention modeling and contextual scene understanding",
    category: "AI & ML",
    tech: ["Vision Transformer", "GPT2", "PyTorch", "Computer Vision", "NLP"],
  },
  {
    id: 5,
    title: "Adaptive Risk-Based Escrow System",
    description: "Fraud detection system using Z-score, CUSUM, and surge analysis for anomaly detection in P2P transactions",
    category: "AI & ML",
    tech: ["Python", "Time-Series Analysis", "Anomaly Detection", "FinTech AI"],
  },
  {
    id: 6,
    title: "AI for Autism Assistance (Bias Analysis)",
    description: "Research project analyzing bias in emotion recognition models across neurotypical and autistic individuals",
    category: "AI & ML",
    tech: ["Computer Vision", "NLP", "Model Evaluation", "Bias Analysis"],
  },
  {
    id: 7,
    title: "RAG Chatbot with Knowledge Graphs",
    description: "Advanced AI chatbot combining RAG with LLM and Knowledge Graphs for intelligent query processing",
    category: "AI & ML",
    tech: ["RAG", "LLM", "Knowledge Graphs", "Python"],
    image: "/projects/knowledgegraph.png",
    repo: "https://github.com/suryaansh001/Radiants_mosdac.git",
  },
  {
    id: 8,
    title: "VaxIntelliBio Nuclear Analysis",
    description: "AI-powered biological sequence analysis using DNABERT and LLM-based interpretation",
    category: "AI & ML",
    tech: ["DNABERT", "LLM", "Bioinformatics", "AI"],
    repo: "https://github.com/suryaansh001/Vax_intelli_bio.git",
  },
  {
    id: 9,
    title: "Yoga Pose Analysis (Bi-LSTM + Attention)",
    description: "Temporal modeling of joint-angle sequences using Bi-LSTM with attention for pose classification and segmentation",
    category: "AI & ML",
    tech: ["LSTM", "Attention", "Time-Series", "Deep Learning"],
  },
  {
    id: 10,
    title: "REx: Dynamic Scene Description",
    description: "Real-time object detection with voice narration for accessibility using CV and speech systems",
    category: "Robotics",
    tech: ["YOLO", "OpenCV", "TTS", "Computer Vision"],
  },
  {
    id: 11,
    title: "Smart Attendance System",
    description: "Automated attendance using object detection, pose estimation, and face recognition",
    category: "Web Development",
    tech: ["YOLO", "CNN", "OpenCV", "Face Recognition"],
    repo: "https://github.com/suryaansh001/Attendance-system",
  },
  {
    id: 12,
    title: "Robotics Integration Project",
    description: "AI-powered robotic systems integrating perception, LLM-based interaction, and real-time control",
    category: "Robotics",
    tech: ["Raspberry Pi", "Arduino", "FastAPI", "Computer Vision", "LLM"],
  },
  {
    id: 13,
    title: "Chrome Keyword Highlighter Extension",
    description: "Chrome extension with keyword highlighting and AI-based summarization",
    category: "Web Development",
    tech: ["JavaScript", "Chrome Extension", "AI Summarization"],
    repo: "https://github.com/suryaansh001/Highlighter_summarizer/tree/master",
  },
  {
    id: 14,
    title: "QR Code Ticketing System",
    description: "Secure event management system with QR-based authentication and backend validation",
    category: "Web Development",
    tech: ["Streamlit", "JWT", "MySQL", "Python"],
    demo: "https://qr-code-ticketing-system.streamlit.app",
    repo: "https://github.com/suryaansh001/qr_code_ticketing",
  },
]

const categories = ["All Projects", "Web Development", "AI & ML", "Robotics"]

export function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")

  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="relative py-32 px-8 md:px-12 md:py-24 bg-gradient-to-b from-black to-zinc-950">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-pink-400 mb-4">03 — SELECTED WORKS</p>
        <h2 className="font-sans text-4xl md:text-5xl font-light italic mb-8">Featured Projects</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wide border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white"
                  : "border-white/20 text-muted-foreground hover:border-purple-400/50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 overflow-hidden transition-all duration-300 p-6"
          >
            {/* Image */}
            {project.image && (
              <div className="mb-4 h-40 rounded overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}

            {/* Content */}
            <h3 className="font-sans text-xl font-light mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
            <p className="text-xs text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map(tech => (
                <span key={tech} className="text-[10px] px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-[10px] px-2 py-1 rounded bg-white/10 text-white/60 border border-white/20">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
