import AnimatedBg from './components/ui/AnimatedBg'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import AgentBox from './components/AgentBox'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep text-white overflow-x-hidden">
      <AnimatedBg />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <HowItWorks />
        <AgentBox />
        <Industries />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
