import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const links = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About'    },
  { to: '/projects',label: 'Projects' },
  { to: '/contact', label: 'Contact'  },
]

export default function Navbar() {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <nav className={`${styles.nav} container`}>
        <NavLink to="/" className={styles.logo}>
          KA<span className={styles.dot}>.</span>
        </NavLink>

        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
