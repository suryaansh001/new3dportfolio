"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "suryaansh958@gmail.com",
      href: "mailto:suryaansh958@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "suryaansh",
      href: "https://linkedin.com/in/suryaansh",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "suryaansh001",
      href: "https://github.com/suryaansh001",
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-8 md:px-12 md:py-24 bg-gradient-to-b from-black to-zinc-950">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-6xl mx-auto text-center"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-pink-400 mb-4">07 — GET IN TOUCH</p>
        <h2 className="font-sans text-4xl md:text-5xl font-light italic mb-4">Let&apos;s Collaborate</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="font-sans text-2xl font-light mb-8">Contact Information</h3>

          {contactLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <Icon className="w-6 h-6 text-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-1">{link.label}</p>
                  <p className="text-white font-light group-hover:text-purple-300 transition-colors">{link.value}</p>
                </div>
              </motion.a>
            )
          })}

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg border border-green-400/30 bg-green-500/10 mt-8"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <div>
                <p className="font-mono text-xs text-green-400 mb-1">CURRENT STATUS</p>
                <p className="text-sm text-green-300">Available for internships, freelance work, and full-time opportunities</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 font-light"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 font-light resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-lg border border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white font-mono text-sm tracking-wide hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <>
                  <MessageCircle className="w-4 h-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
