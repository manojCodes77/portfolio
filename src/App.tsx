import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { AmbientBackground } from './components/AmbientBackground';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000814] via-[#001d3d] to-[#003566] relative">
      <AmbientBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;