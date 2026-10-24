import { useState, useEffect, useCallback, useRef } from 'react'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import './App.css'

// Keeps the page as the only scroller. A sidebar taller than the window gets
// a negative sticky top, so it scrolls up with the page only until its bottom
// is in view and then holds still.
function useStickySidebar() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const update = () => {
      el.style.top = Math.min(0, window.innerHeight - el.offsetHeight) + 'px'
    }
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])
  return ref
}

function App() {
  const sidebarRef = useStickySidebar()
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // One project open at a time; its theme is applied while it's on screen
  const [openProject, setOpenProject] = useState(null)
  const [visibleProject, setVisibleProject] = useState(null)
  const activeProject = visibleProject?.name === openProject ? visibleProject.theme : null

  const toggleProject = (name) => setOpenProject(o => o === name ? null : name)
  const setProjectVisible = useCallback((name, projectTheme, visible) => {
    setVisibleProject(v => visible ? { name, theme: projectTheme } : v?.name === name ? null : v)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (activeProject) {
      root.setAttribute('data-project', activeProject)
    } else {
      root.removeAttribute('data-project')
    }
    // Phones tint the browser bar to match
    const meta = document.querySelector('meta[name="theme-color"]')
    meta.setAttribute('content', getComputedStyle(root).getPropertyValue('--browser-bar').trim())
  }, [activeProject, theme])

  return (
    <>
      <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
        {theme === 'dark' ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
      <div className="layout">
        <aside className="sidebar" ref={sidebarRef}>
          <Hero />
          <About />
        </aside>
        {/* Divider between me and the projects; carries the open project's
            border style and backs the themed panel */}
        <div className="rail" aria-hidden="true">
          <span className="rail-line" />
        </div>
        <main className="content">
          <Work openProject={openProject} onToggle={toggleProject} onVisibleChange={setProjectVisible} />
        </main>
      </div>
    </>
  )
}

export default App
