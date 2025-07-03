import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import { SectionMetricas } from "./components/Metricas/Metricas"
import Parceiros from "./components/Parceiros/Parceiros"
import Whatsapp from "./components/Whatsapp"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Parceiros />
      <Whatsapp />
      <SectionMetricas />
    </>
  )
}

export default App
