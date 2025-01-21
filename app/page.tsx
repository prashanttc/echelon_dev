import About from "@/components/sections/About"
import Footer from "@/components/Footer"
import Extra from "@/components/sections/Extra"
import Hero from "@/components/sections/Hero"
import Navbar from "@/components/sections/Navbar"
import Team from "@/components/sections/Team"
import UpcomingEvents from "@/components/sections/UpcomingEvents"

const page = () => {
  return (
    <div className="bg-black overflow-hidden px-10">
    <Navbar/>
    <Hero/>
    <About/>
    <Team/>
    <UpcomingEvents/>
    <Extra/>
    <Footer/>
    </div>
  )
}

export default page
