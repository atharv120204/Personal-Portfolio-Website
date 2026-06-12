import { motion } from 'framer-motion'
import { ExternalLink, GitFork } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './Projects.css'

const projects = [
  {
    title: 'AI Powered Chatbot for Skincare & Triage',
    desc: 'An AI-powered chatbot providing offline support for skin disease diagnosis, priority triage, temporary solutions, nearby hospital locations, and an integrated online booking system.',
    tags: ['Python', 'AI/ML', 'NLP', 'Healthcare'],
    github: 'https://github.com/atharv',
    live: null,
    accent: '#7c3aed',
    year: '2025',
  },
  {
    title: 'Intern Management & Recommendation System',
    desc: 'Led backend development of a system offering analytics-based intern feedback, performance tracking, and intelligent job recommendations using data-driven insights.',
    tags: ['Node.js', 'MySQL', 'Analytics', 'Backend'],
    github: 'https://github.com/atharv',
    live: null,
    accent: '#06b6d4',
    year: '2025',
  },
  {
    title: 'Gas Leak Detection with Mobile Alerts',
    desc: 'Developed a GSM-based Arduino system that detects gas leaks and triggers both local buzzer alarms and remote mobile SMS alerts in real time.',
    tags: ['Arduino', 'GSM', 'Embedded Systems', 'C'],
    github: 'https://github.com/atharv',
    live: null,
    accent: '#f59e0b',
    year: '2025',
  },
  {
    title: 'Hand Gesture Control Interface',
    desc: 'Built a real-time gesture recognition system using MediaPipe and OpenCV for contactless control interfaces — enabling hands-free interaction with computer systems.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/atharv',
    live: null,
    accent: '#10b981',
    year: '2024',
  },
  {
    title: 'Object & Speed Detection System',
    desc: 'Used OpenCV and Python to detect and track moving objects in video streams, calculating their real-time speeds using frame-to-frame analysis.',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'ML'],
    github: 'https://github.com/atharv',
    live: null,
    accent: '#f43f5e',
    year: '2024',
  },
  {
    title: 'Voice Controlled Military Car',
    desc: 'Prototyped a voice-activated robotic vehicle on Arduino Uno intended for rescue and military operations in hazardous zones, controlled entirely via voice commands.',
    tags: ['Arduino', 'Voice Control', 'Robotics', 'C'],
    github: 'https://github.com/atharv',
    live: null,
    accent: '#8b5cf6',
    year: '2020',
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">// what I&apos;ve built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="projects-sub">
          A mix of AI, embedded systems, and web projects — each one solving a real problem.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="project-card"
            style={{ '--card-accent': p.accent }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="project-top">
              <span className="project-number mono">{p.year}</span>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitFork size={18} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
