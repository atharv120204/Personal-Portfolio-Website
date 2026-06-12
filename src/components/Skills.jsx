import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Skills.css'

const categories = [
  {
    name: 'Programming Languages',
    color: '#7c3aed',
    skills: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    name: 'Web Technologies',
    color: '#06b6d4',
    skills: ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Database',
    color: '#f59e0b',
    skills: ['MySQL'],
  },
  {
    name: 'Tools & Platforms',
    color: '#10b981',
    skills: ['Git', 'GitHub', 'VS Code', 'Arduino IDE', 'Microsoft Office'],
  },
  {
    name: 'Areas of Interest',
    color: '#f43f5e',
    skills: ['Artificial Intelligence', 'Computer Vision', 'Embedded Systems', 'HCI', 'Software Development'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// my toolkit</p>
        <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
      </motion.div>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="skill-card"
            style={{ '--cat-color': cat.color }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="skill-cat">{cat.name}</h3>
            <div className="skill-pills">
              {cat.skills.map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="achievements"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="achievements-title">Achievements &amp; Activities</h3>
        <div className="achievements-grid">
          <div className="achievement-card">
            <span className="achievement-icon">🏆</span>
            <div>
              <strong>NTSE Stage 2 Qualifier</strong>
              <p>National Talent Search Examination — 2019</p>
            </div>
          </div>
          <div className="achievement-card">
            <span className="achievement-icon">🤖</span>
            <div>
              <strong>Project Developer — RoboVITics Club</strong>
              <p>VIT Vellore · Mentored juniors &amp; built hardware-software projects · 2023–2024</p>
            </div>
          </div>
          <div className="achievement-card">
            <span className="achievement-icon">💼</span>
            <div>
              <strong>Frontend Developer Intern — Sstudize</strong>
              <p>Mumbai · Led a 2-member team building responsive UI components · May–Jun 2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
