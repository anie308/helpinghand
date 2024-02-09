import { Link } from "react-router-dom";
import need from "../assets/need.png";

function Need() {
  return (
    <div className="bg-background w-full p-[40px_20px] lg:p-[50px_40px]">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="font-rubik text-[30px] lg:text-[60px] font-[500] leading-[30px] lg:leading-[60px] text-start flex-1">
          Let’s Give Help To <br className="hidden lg:block" />
          Those In Need
        </div>
        <div className="flex-1 flex flex-col items-start lg:items-end">
          <p className="font-rubik text-[14px] lg:text-[16px] text-[#3D3D3D] mt-[5px] lg:mt-0">
            Charitable foundations provide a variety of social services{" "}
            <br className="hidden lg:block" /> such as education, food,
            medicine, housing, and others
          </p>
          <Link
            className="font-rubik font-[500] text-orange text-start mt-[5px] lg:mt-0"
            to="/"
          >
            Show More
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 mt-[50px] gap-[60px]">
        <div className="flex bg-white flex-col border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
          <div className="flex-1">
            <img src={need} className="h-[200px] lg:h-[300px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
              Share Food With Others In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
        </div>
        <div className="flex bg-white flex-col border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
          <div className="flex-1">
            <img src={need} className="h-[200px] lg:h-[300px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
              Share Food With Others In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
        </div>
        <div className="flex bg-white flex-col border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
          <div className="flex-1">
            <img src={need} className="h-[200px] lg:h-[300px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
              Share Food With Others In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
        </div>
        <div className="flex bg-white flex-col border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
          <div className="flex-1">
            <img src={need} className="h-[200px] lg:h-[300px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
              Share Food With Others In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
        </div>
        <div className="flex bg-white flex-col border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
          <div className="flex-1">
            <img src={need} className="h-[200px] lg:h-[300px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
              Share Food With Others In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
        </div>
        <div className="flex bg-white flex-col border-[2px] border-black px-[10px] lg:px-[20px] pt-[20px] rounded-[30px]">
          <div className="flex-1">
            <img src={need} className="h-[200px] lg:h-[300px] w-full" alt="" />
          </div>
          <div className="flex-1 py-[20px]">
            <p className="font-rubik text-[18px] text-[#383F42]"><span className="font-[600] text-orange">$20</span>/MON </p>
            <p className="capitalize font-rubik text-[14px]">or make one time Donation</p>
            <p className="font-rubik text-[20px] text-black font-[500] mt-[10px]">
              Share Food With Others In Need
            </p>
            <p className="font-rubik text-[14px] text-black font-[400] mt-[10px]">
            In carrying out their duties, charitable foundations food, medicine, food, 
            </p>
            <div className="mt-[20px]">
                <div className="flex items-center justify-between w-full">
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Raised : $69,152</p>
                    <p className="font-rubik font-[500] text-[14px] text-[#3D3D3D]">Goal: $89,000</p>
                </div>
                <div className="h-[10px] bg-gray-300 w-full rounded-full">
                    <p className="h-[10px] bg-orange rounded-full w-[40%]"></p>
                </div>
            </div>
            <button  className="bg-orange h-[40px] lg:h-[50px] rounded-full text-white w-full mt-[20px] font-rubik font-[500]">
              Read Post
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Need;
