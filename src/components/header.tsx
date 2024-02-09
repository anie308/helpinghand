import { Link } from "react-router-dom";
import bglogo from "../assets/ctalogo.png";
import navlogo from "../assets/navlogo.svg";
function Header() {
  return (
    <div className="bg-background h-[800px] relative border">
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
      <div className="absolute top-0 w-full h-full items-center p-[20px_40px]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={navlogo} alt="" />
          </Link>
          <div className="flex items-center space-x-[30px]">
            {links.map(({ title, link }, index) => (
              <Link to={link} className="font-rubik" key={index}>
                {title}
              </Link>
            ))}
          </div>
          <button className="p-[8px_35px] bg-orange text-white rounded-full font-rubik">
            Donate Now
          </button>
        </div>
        <div className="grid grid-cols-2 mt-[50px]">
          <div>
            <p className="font-rubik font-[500]">
              Healing Hearts, Healing Lives
            </p>
            <p className="font-[700] font-rubik text-[70px] leading-[70px] mt-[20px]">
              Being Part Of <br className="hidden lg:block" />
              Aid Foundation <br className="hidden lg:block" />
              Is A Way To Share
            </p>
            <p className="font-rubik text-[16px] w-full lg:w-[80%] mt-[20px]">Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pulvinar maecenas neque. Sit tellus nunc enim cursus dolor ultrices sit ullamcorper aliqueorem aliquet.</p>
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque, magni, consequatur maiores explicabo aut quas tenetur
            doloribus iure assumenda natus quo quasi quidem, quaerat ipsam
            recusandae ea culpa vitae aliquam!
          </div>
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
