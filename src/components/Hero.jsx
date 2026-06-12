import { motion } from 'framer-motion'
import { ArrowDown, Mail, GitFork, Link } from 'lucide-react'
import './Hero.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-content">
        <motion.p className="hero-greeting mono" {...fade(0.1)}>
          👋 Hi, I&apos;m
        </motion.p>

        <motion.h1 className="hero-name" {...fade(0.25)}>
          Atharv Chordiya
        </motion.h1>

        <motion.h2 className="hero-title" {...fade(0.4)}>
          Computer Science Engineer &amp; AI Enthusiast
        </motion.h2>

        <motion.p className="hero-desc" {...fade(0.55)}>
          B.Tech CSE student at VIT Vellore, passionate about Artificial Intelligence,
          Embedded Systems, and Human-Computer Interaction. NTSE Stage 2 qualifier
          building real-world solutions with code and hardware.
        </motion.p>

        <motion.div className="hero-actions" {...fade(0.7)}>
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </motion.div>

        <motion.div className="hero-socials" {...fade(0.85)}>
          <a href="https://github.com/atharv" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitFork size={20} />
          </a>
          <a href="https://linkedin.com/in/atharv-chordiya" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Link size={20} />
          </a>
          <a href="mailto:atharvchordiya04@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  )
}
