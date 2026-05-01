import styles from './SkillBadge.module.css'

export default function SkillBadge({ name }) {
  return <span className={styles.badge}>{name}</span>
}
