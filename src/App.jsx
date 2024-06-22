import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefit from "./component/Benefit"
import Button from "./component/Button"
import Collaboration from "./component/Collaboration"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Pricing from "./component/Pricing"
import RoadMap from "./component/RoadMap"
import Service from "./component/Service"

const App = () => {
  return (
   <>
   
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefit/>
      <Collaboration />
      <Service />
      <Pricing />
      <RoadMap />
      <Footer />
    </div>
    <ButtonGradient />
   
    </>
  )
    
}

export default App
