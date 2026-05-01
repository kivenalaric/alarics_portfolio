import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

// 1. Go to https://web3forms.com
// 2. Enter kivenalaric2@gmail.com → get your access key
// 3. Paste it below
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY_PORTFOLIO;

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/kivenalaric',
    icon: <GitHubIcon />,
  },
  {
    label: 'GitLab',
    href: 'https://gitlab.com/kivenalaric',
    icon: <GitLabIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kiven-alaric-461982253/',
    icon: <LinkedInIcon />,
  },
  {
    label: 'kivenalaric2@gmail.com',
    href: 'mailto:kivenalaric2@gmail.com',
    icon: <MailIcon />,
  },
]

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page">
      <div className="container">

        {/* ── Page heading ── */}
        <motion.div className={styles.pageHead} {...fadeUp(0.1)}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h1 className={styles.pageTitle}>
            Let's build something<br />
            <span className={styles.accent}>together.</span>
          </h1>
          <p className={styles.subtitle}>
            I'm open to freelance work, full-time roles, and interesting collaborations.
            Drop me a message and I'll get back to you.
          </p>
        </motion.div>

        <div className={styles.layout}>

          {/* ── Left: info + socials ── */}
          <motion.aside className={styles.info} {...fadeUp(0.2)}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Location</p>
              <p className={styles.infoValue}>Simbock, Yaoundé, Cameroon</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Phone</p>
              <a href="tel:+237652930687" className={styles.infoValue}>
                +237 652 930 687
              </a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Response time</p>
              <p className={styles.infoValue}>Usually within 24 hours</p>
            </div>

            <div className={styles.socials}>
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.aside>

          {/* ── Right: form ── */}
          <motion.div className={styles.formWrap} {...fadeUp(0.3)}>
            {status === 'success' ? (
              <motion.div
                className={styles.successMsg}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className={styles.successIcon}>✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out — I'll get back to you soon.</p>
                <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Kiven Alaric"
                      className={styles.input}
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Hey Kiven, I'd love to work with you on..."
                    className={styles.textarea}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Try emailing me directly at kivenalaric2@gmail.com
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </main>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function GitLabIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.49a.42.42 0 01.11-.18.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
