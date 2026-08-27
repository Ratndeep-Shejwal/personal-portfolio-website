import SmoothScroll from './lib/SmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import HowIWork from './components/HowIWork'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg text-text font-body">
        <Header />
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Services />
        <HowIWork />
        <Experience />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </SmoothScroll>
  )
}

export default App