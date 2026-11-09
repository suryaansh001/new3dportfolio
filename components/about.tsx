"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Download } from "lucide-react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])

  useEffect(() => {
    const bio = document.getElementById('about-bio');
    const height = bio ? bio.offsetHeight - 128 + 100 : 500; // 128px for 8rem windmill height, +100px extra movement, fallback 500px

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#about",
        start: "top center",
        end: "bottom center",
      },
    });

    tl.to("#pin-windmill", {
      y: height,
      rotateZ: 900,
    });
  }, [])

  return (
    <section id="about" ref={containerRef} className="relative py-32 px-8 md:px-12 md:py-24 bg-gradient-to-b from-zinc-950 to-black">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-purple-400 mb-4">02 — ABOUT ME</p>
        <h2 className="font-sans text-4xl md:text-5xl font-light italic">Who I Am</h2>
      </motion.div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-purple-400/30 backdrop-blur-sm">
            <img 
              src="/suryaansh2.png" 
              alt="Suryaansh Sharma" 
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
          </div>
        </motion.div>

        {/* Right - Bio */}
        <motion.div
          id="about-bio"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-start space-x-8"
        >
          {/* Bio Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-light mb-2">Suryaansh Sharma</h3>
              <p className="text-purple-400 font-mono text-sm tracking-wide">AI Developer & Software Engineer</p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-white/80">
              <p>
                Computer Science student focused on AI application development, LLM integrations, backend systems, and intelligent automation — building custom agentic architectures, AI-powered applications, RAG systems, REST APIs, and real-time AI pipelines with Python, FastAPI, LLM APIs, and modern AI frameworks.
              </p>
              <p>
                Hands-on experience spans AI internships at Racketail Solutions, robotics work on humanoid systems, and freelance web development — from multi-agent orchestration and local AI desktop assistants to computer-vision and physiological-signal ML pipelines.
              </p>
              <p>
                Currently pursuing my B.Tech at JK Lakshmipat University, Jaipur (2023 – Present), and previously served as a Python Teaching Assistant there.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">EDUCATION</p>
                <p className="text-sm">BTech @ JKLU (2023-2027)</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">LOCATION</p>
                <p className="text-sm">Jaipur, Rajasthan</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">EMAIL</p>
                <p className="text-sm break-all">suryaansh958@gmail.com</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground mb-1">STATUS</p>
                <p className="text-sm text-green-400">Available for work</p>
              </div>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400/50 rounded-lg font-mono text-sm tracking-wide bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300 mt-4"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>

        </motion.div>
      </div>

      {/* Windmill Animation */}
      {/* Windmill Animation */}
      <div id="pin-windmill-wrap" className="absolute right-4 top-0 h-full w-32 flex items-start justify-center pointer-events-none">
        <div id="pin-windmill" className="absolute top-0">
          <svg 
            id="pin-windmill-svg" 
            viewBox="0 0 100 100" 
            className="w-32 h-32"
          >
            <defs>
              <linearGradient id="flower-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" /> {/* Purple-500 */}
                <stop offset="100%" stopColor="#2DD4BF" /> {/* Teal-400 */}
              </linearGradient>
            </defs>
            
            <g fill="url(#flower-gradient)">
              {/* Individual Petal Path (duplicated and rotated) */}
              {[0, 90, 180, 270].map((rotation) => (
                <path
                  key={rotation}
                  d="M50 50 Q50 20 20 20 L20 40 Q40 40 50 50"
                  transform={`rotate(${rotation} 50 50)`}
                />
              ))}
            </g>
            {/* Center Hub */}
            <circle cx="50" cy="50" r="2" fill="white" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}
