import FAQ from './faq'
import TechStackSection from './techstacksection'
import FeaturesSection from './featuressection'
import HeroSection from './herosection'
import Navbar from './Navbar'
import Footer from './footer'


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <FAQ />
      <Footer />
    </>
  )
}

export default LandingPage