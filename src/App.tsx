import './App.css'
import About from './components/about';
import { CallToAction } from './components/cta';
import Experience from './components/experience';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Header } from './components/navbar';
import { SelectedWork } from './components/selectedwork';
import SkillsSection from './components/SkillsSection';
//import { Process } from './components/process';
//import { SelectedWork } from './components/selectedwork';
//import { Services } from './components/services';



export const App = () => {


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        {/*<Services />
        <Process />*/}
        <SkillsSection />
        <About/>
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
