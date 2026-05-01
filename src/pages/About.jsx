import { motion } from 'framer-motion'
import { experience, education } from '../data/experience'
import styles from './About.module.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  return (
    <main className="page">
      <div className="container">

        {/* ── Page heading ── */}
        <motion.div
          className={styles.pageHead}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className={styles.eyebrow} variants={fadeUp}>About me</motion.p>
          <motion.h1 className={styles.pageTitle} variants={fadeUp}>
            Developer.<br />
            <span className={styles.accent}>Digital artist.</span><br />
            Lifelong learner.
          </motion.h1>
        </motion.div>

        {/* ── Bio ── */}
        <motion.section
          className={styles.bio}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.p className={styles.bioText} variants={fadeUp}>
            I'm a full-stack developer and digital artist from Cameroon with 1+ years of
            professional experience. I specialise in building pixel-perfect, responsive UIs
            and integrating complex APIs. I bring both technical precision and creative
            instinct to everything I build — and I'm always hungry to learn.
          </motion.p>

          <motion.div className={styles.bioMeta} variants={fadeUp}>
            <span>📍 Simbock, Yaoundé, Cameroon</span>
            <a href="mailto:kivenalaric2@gmail.com">kivenalaric2@gmail.com</a>
            <span>+237 652 930 687</span>
          </motion.div>
        </motion.section>

        <hr className={styles.divider} />

        {/* ── Experience ── */}
        <section className={styles.section}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Experience
          </motion.h2>

          <div className={styles.timeline}>
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              >
                {/* Spine dot */}
                <div className={styles.timelineDot} />

                <div className={styles.timelineBody}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3 className={styles.role}>{item.role}</h3>
                      <p className={styles.company}>
                        {item.company}
                        <span className={styles.location}> · {item.location}</span>
                      </p>
                    </div>
                    <span className={styles.period}>{item.period}</span>
                  </div>

                  <ul className={styles.bullets}>
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ── Education ── */}
        <section className={styles.section}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Education
          </motion.h2>

          <div className={styles.eduGrid}>
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.eduCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
              >
                <span className={styles.eduPeriod}>{item.period}</span>
                <h3 className={styles.eduDegree}>{item.degree}</h3>
                <p className={styles.eduInstitution}>
                  {item.institution}
                  {item.location && ` · ${item.location}`}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
