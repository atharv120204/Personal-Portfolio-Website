import { motion } from 'framer-motion'
import { Mail, GitFork, Link, Send, Phone } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

export default function Contact() {
  const [ref, inView] = useInView()

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    window.location.href = `mailto:atharvchordiya04@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(form.message.value)}`
  }

  return (
    <section id="contact" ref={ref}>
      <motion.div
        className="contact-wrap"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-info">
          <p className="section-label">// get in touch</p>
          <h2 className="section-title">Let&apos;s <span>Connect</span></h2>
          <p className="contact-desc">
            I&apos;m currently open to internships, research collaborations, and
            MS opportunities. Whether you have a project idea or just want to
            chat — feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:atharvchordiya04@gmail.com" className="contact-link">
              <Mail size={18} /> atharvchordiya04@gmail.com
            </a>
            <a href="tel:+919405212115" className="contact-link">
              <Phone size={18} /> +91 9405212115
            </a>
            <a href="https://github.com/atharv" target="_blank" rel="noreferrer" className="contact-link">
              <GitFork size={18} /> github.com/atharv
            </a>
            <a href="https://linkedin.com/in/atharv-chordiya" target="_blank" rel="noreferrer" className="contact-link">
              <Link size={18} /> linkedin.com/in/atharv-chordiya
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="What's on your mind?" required />
          </div>
          <button type="submit" className="btn-primary form-submit">
            <Send size={16} /> Send Message
          </button>
        </form>
      </motion.div>

      <div className="contact-footer">
        <p className="mono">Designed &amp; built by <span>Atharv Chordiya</span></p>
      </div>
    </section>
  )
}
