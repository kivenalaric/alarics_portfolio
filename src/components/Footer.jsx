import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/kivenalaric' },
  { label: 'GitLab',   href: 'https://gitlab.com/kivenalaric' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kiven-alaric-461982253/' },
]

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <span className={styles.logo}>
            KA<span className={styles.dot}>.</span>
          </span>
          <p className={styles.tagline}>
            Bridging the gap between design and functionality.
          </p>
        </div>

        <nav className={styles.nav}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={styles.navLink}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.socials}>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {label}
            </a>
          ))}
        </div>

      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Kiven Alaric Nyuyfoni. All rights reserved.</p>
        <p>Built with React + Framer Motion.</p>
      </div>
    </footer>
  )
}
