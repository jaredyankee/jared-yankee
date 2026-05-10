import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <main className="main">
      <Hero />
      <div className="divider" />
      <Work />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
    </main>
  )
}

export default App
