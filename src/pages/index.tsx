import HowTo from "../components/HowTo"
import Cta from "../components/cta"
import Faq from "../components/faq"
import Footer from "../components/footer"
import Header from "../components/header"
import Need from "../components/need"
import Trustee from "../components/trustee"

function Home() {
  return (
    <div className=" flex flex-col items-center w-full bg-background">

      <div className="container w-full">
      <Header/>
      <Trustee/>
      <HowTo/>
      <Need/>
      <Faq/>
      <Cta/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home