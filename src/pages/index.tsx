import HowTo from "../components/HowTo"
import Cta from "../components/cta"
import Faq from "../components/faq"
import Footer from "../components/footer"
import Need from "../components/need"

function Home() {
  return (
    <div>
      <HowTo/>
      <Need/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home