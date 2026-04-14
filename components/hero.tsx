"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [displayedText, setDisplayedText] = useState("")
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const typingTexts = [
    "I build intelligent AI systems that solve real-world problems.",
    "modern web applications with cutting-edge technologies.",
    "robotics solutions that bridge hardware and software.",
    "digital experiences that users love and remember.",
    "full-stack applications that scale and perform.",
  ]

  useEffect(() => {
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    const typingSpeed = 50
    const pauseDuration = 3000

    const type = () => {
      const currentText = typingTexts[textIndex]
      
      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex + 1))
        charIndex++
        
        if (charIndex === currentText.length) {
          isDeleting = true
          setTimeout(type, pauseDuration)
          return
        }
      } else {
        setDisplayedText(currentText.substring(0, charIndex - 1))
        charIndex--
        
        if (charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % typingTexts.length
        }
      }
      
      setTimeout(type, typingSpeed)
    }

    const timer = setTimeout(type, 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* 3D Sphere Background */}
      <div className="absolute inset-0">
        <SentientSphere />
      </div>

      {/* Typography Overlay */}
      <motion.div style={{ opacity, scale }} className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 md:px-12 md:py-20">
        {/* Top Left - Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">01 — AI DEVELOPER</p>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
            Suryaansh
            <br />
            <span className="italic">Sharma</span>
          </h1>
          <p className="font-mono text-xs tracking-[0.3em] text-purple-400 mt-4">Software Engineer & AI Specialist</p>
        </motion.div>

        {/* Center - Typing Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full px-8 max-w-2xl"
        >
          <p className="font-sans text-2xl md:text-4xl text-center text-white/90 h-24 flex items-center justify-center">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* Bottom - CTA and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-6"
        >
          <div className="flex gap-3">
            <motion.button
              data-cursor-hover
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 border border-purple-400/50 rounded-full font-mono text-sm tracking-widest uppercase bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-500"
            >
              View Projects
            </motion.button>
            <motion.button
              data-cursor-hover
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-pink-400/50 rounded-full font-mono text-sm tracking-widest uppercase bg-pink-500/10 hover:bg-pink-500/20 transition-colors duration-500"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/suryaansh001"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="text-muted-foreground hover:text-purple-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/suryaansh"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="text-muted-foreground hover:text-pink-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:suryaansh958@gmail.com"
              data-cursor-hover
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
