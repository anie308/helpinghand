import { Link } from "react-router-dom";
import bglogo from "../assets/ctalogo.png";
import navlogo from "../assets/navlogo.svg";
import need from "../assets/header1.png";
import need1 from "../assets/herder2.png";
import { FaBars } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-background h-[1100px] lg:h-[900px] relative ">
      <div className="h-[500px] w-[500px] absolute bg-green right-0 rounded-bl-[100px] hidden lg:flex items-center justify-center ">
        <img src={bglogo} className="h-[300px]" alt="" />
      </div>
      <div className="h-[200px] w-[700px] absolute bg-green bottom-0 left-0 rounded-tr-[100px] hidden lg:flex items-center justify-center space-x-[40px]">
        <div>
          <p className="text-white font-rubik text-[30px] font-[600]">145+</p>
          <p className="text-white font-rubik text-[16px] font-[400]">
            Archived Campaigns{" "}
          </p>
        </div>
        <div>
          <p className="text-white font-rubik text-[30px] font-[600]">1200+</p>
          <p className="text-white font-rubik text-[16px] font-[400]">
            Donateion Received{" "}
          </p>
        </div>
        <div>
          <p className="text-white font-rubik text-[30px] font-[600]">545+</p>
          <p className="text-white font-rubik text-[16px] font-[400]">
            Clarity in the Last Year{" "}
          </p>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full items-center p-[20px] lg:p-[20px_40px]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={navlogo} alt="" />
          </Link>
          <div className="hidden lg:flex items-center space-x-[30px]">
            {links.map(({ title, link }, index) => (
              <Link to={link} className="font-rubik" key={index}>
                {title}
              </Link>
            ))}
           
          </div>
          <button className="hidden lg:flex p-[8px_35px] bg-orange text-white rounded-full font-rubik">
            Donate Now
          </button>

          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <FaBars className="text-[30px]" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center mt-[50px]">
          <div className="flex-1">
            <p className="font-rubik font-[500]">
              Healing Hearts, Healing Lives
            </p>
            <p className="font-[700] font-rubik text-[40px] lg:text-[70px] leading-[40px] lg:leading-[70px] mt-[20px]">
              Being Part Of <br className="hidden lg:block" />
              Aid Foundation <br className="hidden lg:block" />
              Is A Way To Share
            </p>
            <p className="font-rubik text-[16px] w-full lg:w-[80%] mt-[20px]">
              Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pulvinar
              maecenas neque. Sit tellus nunc enim cursus dolor ultrices sit
              ullamcorper aliqueorem aliquet.
            </p>
          </div>
          <div className="mt-[50px] lg:mt-0 flex flex-1 lg:space-x-[20px] items-center">
            <div className="flex bg-white flex-col w-full lg:w-[60%] border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
              <div className="flex-1">
                <img
                  src={need}
                  className="h-[300px] lg:h-[300px] w-full"
                  alt=""
                />
              </div>
              <div className="flex-1 py-[20px]">
                <p className="font-rubik text-[18px] text-[#383F42]">
                  <span className="font-[600] text-orange">$20</span>/MON{" "}
                </p>
                <p className="capitalize font-rubik text-[14px]">
                  or make one time Donation
                </p>
                <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
                  Share Food With Others In Need
                </p>
                <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
                  In carrying out their duties, charitable foundations food,
                  medicine, food,
                </p>
                <div className="mt-[20px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">
                      Raised : $69,152
                    </p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">
                      Goal: $89,000
                    </p>
                  </div>
                  <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                  </div>
                </div>
                <button className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
                  Read Post
                </button>
              </div>
            </div>
            <div className="hidden lg:flex h-fit bg-white flex-col w-[40%] border-[2px] border-black px-[10px] lg:px-[20px] pt-[10px] rounded-[30px]">
              <div className="">
                <img
                  src={need1}
                  className="h-[60px] lg:h-[180px] w-full"
                  alt=""
                />
              </div>
              <div className=" py-[10px]">
                <p className="font-rubik text-[14px] text-[#383F42]">
                  <span className="font-[600] text-orange">$20</span>/MON{" "}
                </p>
                <p className="capitalize font-rubik text-[14px]">
                  or make one time Donation
                </p>
                <p className="font-rubik text-[13px] text-black font-[500] mt-[5px]">
                  Share Food With Others In Need
                </p>
                <p className="font-rubik text-[12px] text-black font-[400] mt-[5px]">
                  In carrying out their duties, charitable foundations food,
                  medicine, food,
                </p>
                <div className="mt-[5px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">
                      Raised : $69,152
                    </p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">
                      Goal: $89,000
                    </p>
                  </div>
                  <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                  </div>
                </div>
                <button className="bg-orange h-[30px] lg:h-[40px] rounded-full text-white w-full mt-[10px] font-rubik font-[500]">
                  Read Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${
            open ? "left-0 lg:left-[-100%]" : "left-[-100%] "
          } fixed top-0 bg-white h-screen w-full flex flex-col  lg:hidden items-start p-[20px] space-y-[20px] transition-all`}
        >
          <div className="flex items-center justify-end w-full">
            <GoPlus
              className="rotate-45 text-[35px]"
              onClick={() => setOpen(!open)}
            />
          </div>
          {links.map(({ title, link }, index) => (
            <Link
              onClick={() => setOpen(!open)}
              to={link}
              className="font-rubik text-[25px]"
              key={index}
            >
              {title}
            </Link>
          ))}
          <button className=" p-[8px_35px] bg-orange text-white rounded-full font-rubik">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "Teams",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
];
