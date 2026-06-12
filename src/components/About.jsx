import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref}>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="about-text">
          <p className="section-label">// about me</p>
          <h2 className="section-title">A bit about <span>myself</span></h2>
          <p>
            I&apos;m Atharv Parag Chordiya, a B.Tech Computer Science &amp; Engineering
            student at Vellore Institute of Technology (VIT), Vellore, graduating in
            July 2026. I have a strong background in core CS, embedded systems, and
            software development.
          </p>
          <p>
            NTSE Stage 2 qualifier with a passion for AI, Computer Vision, and
            Human-Computer Interaction. I&apos;m currently aiming to pursue an MS in the
            US. Outside of tech, I love cricket, chess, archery, and solving Rubik&apos;s
            cubes.
          </p>
          <div className="about-facts">
            {[
              ['🎓', 'VIT Vellore — B.Tech CSE'],
              ['📍', 'Malegaon, Nashik, India'],
              ['🏆', 'NTSE Stage 2 Qualifier'],
              ['🎯', 'Targeting MS in the US'],
            ].map(([icon, text]) => (
              <div key={text} className="about-fact">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card">
          <div className="about-avatar">
            <div className="avatar-placeholder">AC</div>
          </div>
          <div className="about-stats">
            {[
              ['7+', 'Projects built'],
              ['7.51', 'CGPA / 10'],
              ['5+', 'Technologies'],
            ].map(([num, label]) => (
              <div key={label} className="stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
