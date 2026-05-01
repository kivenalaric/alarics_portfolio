import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SkillBadge from '../components/SkillBadge'
import { skills } from '../data/skills'
import profileImg from '../assets/profile.png'
import styles from './Home.module.css'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Home() {
  return (
    <main className="page">
      {/* ── Hero ── */}
      <section className={styles.hero}>

        {/* Image panel — full height, bleeds to right edge, diagonal left edge */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <img src={profileImg} alt="Kiven Alaric" />
        </motion.div>

        {/* Text — sits inside container, z-index above image panel */}
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <motion.span className={styles.available} {...fadeUp(0.2)}>
              <span className={styles.dot} />
              Available for work
            </motion.span>

            <motion.h1 className={styles.name} {...fadeUp(0.3)}>
              Kiven Alaric<br />
              <span className={styles.nameAccent}>Nyuyfoni</span>
            </motion.h1>

            <motion.p className={styles.role} {...fadeUp(0.42)}>
              Full-Stack Web Developer — Frontend Focused
            </motion.p>

            <motion.p className={styles.tagline} {...fadeUp(0.52)}>
              Bridging the gap between<br />
              <span className={styles.taglineAccent}>design and functionality.</span>
            </motion.p>

            <motion.div className={styles.ctas} {...fadeUp(0.62)}>
              <Link to="/projects" className={styles.btnPrimary}>
                View Projects
              </Link>
              <Link to="/contact" className={styles.btnSecondary}>
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills strip ── */}
      <section className={styles.skillsSection}>
        <div className="container">
          <motion.p
            className={styles.skillsLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Tech I work with
          </motion.p>

          <motion.div
            className={styles.skillsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={{
                  hidden:  { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                <SkillBadge name={skill.name} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
