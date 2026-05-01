import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <main className="page">
      <div className="container">

        {/* ── Page heading ── */}
        <motion.div
          className={styles.pageHead}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className={styles.eyebrow}>What I've built</p>
          <h1 className={styles.pageTitle}>
            Projects
          </h1>
          <p className={styles.subtitle}>
            A selection of things I've shipped — more coming as I keep building.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        {projects.length > 0 ? (
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>Projects coming soon.</p>
        )}

      </div>
    </main>
  )
}
