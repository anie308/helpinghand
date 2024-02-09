import { Link } from "react-router-dom"
import helplogo from '../assets/helplogo.svg'
import bglogo from '../assets/bglogo.png'


function Footer() {
  return (
    <div className="bg-background  h-[600px] lg:h-[300px]  relative flex justify-center items-center">
      <img src={bglogo} className="h-[300px] hidden lg:flex" alt="" />
     <div className="py-[30px] flex flex-col items-center justify-between absolute top-0 w-full h-full">
     <Link to="/"  className="outline-none">
        <img className="w-[200px] lg:w-full" src={helplogo} alt="" />
      </Link>
      <div className="mt-[20px] flex flex-col lg:flex-row space-y-[30px] lg:space-y-0 lg:space-x-[30px] text-center">
        {links.map(({title}, index)=> (
          <Link className="font-rubik font-[500]" to="" key={index}>{title}</Link>
        ))}
      </div>
      <p className="text-[#3D3D3D] font-[400] font-rubik mt-[40px]">© 2023 Asra . All rights reserved.</p>
     </div>
    </div>
  )
}

export default Footer

const links = [
  {
    title: "Donations",
    path:"/"
  },
  {
    title: "Popular Causes",
    path:"/"
  },
  {
    title: "Upcoming Events",
    path:"/"
  },
  {
    title: "Latest Blog",
    path:"/"
  },
  {
    title: "Career",
    path:"/"
  },
  {
    title: "Help",
    path:"/"
  },
  {
    title: "Privacy",
    path:"/"
  },
]