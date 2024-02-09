import ismiley from "../assets/ismiley.svg";
import idonate from "../assets/idonate.svg";
import ipeople from "../assets/ipeople.svg";
import donate from "../assets/donate.png";
import explore from "../assets/explore.png";
import { Link } from "react-router-dom";
function HowTo() {
  return (
    <div className="flex flex-col items-center justify-center bg-background w-full p-[40px_20px] lg:p-[50px_40px]">
      <Share />
      <Start />
    </div>
  );
}

export default HowTo;

const Share = () => {
  return (
    <div className="border-[2px] w-full border-black rounded-[20px] p-[20px] bg-white grid lg:grid-cols-2 items-center">
     <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange text-[20px]">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[70px] leading-[65px] text-black font-[600] mt-[20px]">
              Share Food With <br className="hidden lg:block" /> Others Who Is <br className="hidden lg:block" /> In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px] w-[70%]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-[70%]  rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-[60%] mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
          <div className="flex flex-col items-end justify-center lg:justify-end relative">
            <img src={donate} className="h-[500px] w-full sm:w-[70%]" alt="" />
            <Link to="/" className="absolute bottom-0">
            <img src={explore} className="h-[150px] " alt="" />
            </Link>
            
          </div>
    </div>
  );
};

const Start = () => {
  return (
    <div className="bg-orange p-[20px] lg:p-[40px] w-full mt-[50px] flex flex-col justify-center items-center rounded-[30px] lg:rounded-[100px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-center font-rubik font-[500] text-[20px] lg:text-[50px]">
          How To Start Help
        </p>
        <p className="text-white text-center text-[14px] lg:text-[16px] font-rubik">
          {" "}
          In carrying out their duties, charitable foundations provide a variety
          of social services such as <br className="hidden lg:block" />{" "}
          education, food, medicine, housing, and others
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-[20px] mt-[50px] space-y-[20px] lg:space-y-0">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={ipeople} alt="" />
          <p className="font-rubik text-white text-[25px] mt-[20px]">Register Yourself</p>
          <p className="font-rubik text-white  text-center  text-[16px] mt-[2px]">Sign up to join and be part of the good people <br className="hidden lg:block" /> who love to share</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={idonate} alt="" />
          <p className="font-rubik text-white text-[25px] mt-[20px]">Select Donate</p>
          <p className="font-rubik text-white  text-center  text-[16px] mt-[2px]">There are many things you can choose to share  <br className="hidden lg:block" /> goodness with</p>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={ismiley} alt="" />
          <p className="font-rubik text-white text-[25px] mt-[20px]">Share Happiness</p>
          <p className="font-rubik text-white  text-center  text-[16px] mt-[2px]">Sharing happiness with those less and doing <br className="hidden lg:block" /> more good for others</p>
        </div>
      </div>
    </div>
  );
};
