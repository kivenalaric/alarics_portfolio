import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0,  transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn'  } },
}

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/"         element={<Home />}     />
            <Route path="/about"    element={<About />}    />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact"  element={<Contact />}  />
          </Routes>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
