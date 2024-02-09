import {  useState } from 'react';
import arrow from '../assets/arrow.png'
import blog from '../assets/blog.png'
import { Link } from 'react-router-dom';
function Faq() {
  return (
    <div className="bg-background pt-[30px] lg:pt-[50px]">
        <Accordion/>
        <Blog/>
    </div>
  )
}

export default Faq


type FaqItem = {
  heading: string;
  content: string;
}

const  Accordion =()=> {
    const [faq, setFaq] =  useState<number | null>(null); 
    const toggle = (i: number) => {
      if (faq === i) {
        return setFaq(null);
      }
      setFaq(i);
    };
  return (
    <div className="flex flex-col lg:flex-row items-center p-[40px_20px] lg:p-[50px_40px]">
        <div className="flex-1">
            <p className="font-rubik text-[30px] lg:text-[60px] font-[500] leading-[30px] lg:leading-[60px]">Find Answers to Your Donation Questions</p>
            <p className="font-rubik text-[16px] text-[#3D3D3D]">Et felis vitae ac venenatis lacus cras etiam risus scelerisque auctor <br className="hidden lg:block" /> adipiscing in a porta</p>
            <div className='w-full items-center justify-center hidden lg:flex'>
                <img src={arrow} className='h-[230px]' alt="" />
            </div>
        </div>
        <div className="flex-1 mt-[30px] lg:mt-0">
        <div className="w-full  flex flex-col space-y-[20px]">
                {items.map((item, i) => (
                  <div
                    key={item.heading}
                    className={`${
                      faq === i
                        ? "  p-[10px] lg:p-[20px]"
                        : "p-[10px] lg:p-[20px_20px]"
                    } bg-white border border-black rounded-[12px] `}
                  >
                    <div onClick={() => toggle(i)} className="cursor-pointer">
                      <div className= {`${faq === i ? "text-orange" : ""} font-rubik font-[400] text-[14px] lg:text-[18px]`}>
                        {item.heading}
                      </div>
                    </div>
                    <div
                      className={`${
                        faq === i ? "h-full mt-[20px]" : "h-0 p-0"
                      } overflow-hidden text-[14px] lg:text-[16px] transition-all break-words font-rubik text-[#777E90] `}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
        </div>
    </div>
  )
}

const Blog = () => {
    return (
        <div className='w-full p-[40px_20px] lg:p-[50px_40px] mt-[30px] lg:mt-[50px]'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className="font-rubik text-[30px] lg:text-[60px] font-[500] leading-[30px] lg:leading-[60px] text-start flex-1">Find Answers to Your Donation Questions</div>
                <div className='flex-1 flex flex-col items-start lg:items-end'>
                <p className="font-rubik text-[14px] lg:text-[16px] text-[#3D3D3D] mt-[5px] lg:mt-0">Charitable foundations provide a variety of social services <br className="hidden lg:block" /> such as education, food, medicine, housing, and others</p>
                <Link className='font-rubik font-[500] text-orange text-start mt-[5px] lg:mt-0' to='/'>Show More</Link>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-[40px] mt-[50px]'>
                <div className=' flex flex-col lg:flex-row items-center gap-[20px] p-[10px] border-[2px] border-black rounded-[20px]'>
                   <div className='flex-1 flex items-center'>
                    <img src={blog} alt="" />
                   </div>
                   <div className='flex-1 py-[20px]'>
                    <p className='font-rubik text-[20px] text-black font-[500]'>10 Creative Ways to Raise Money for Your Favorite Charity</p>
                    <p className='font-rubik text-[16px] text-black font-[400]'>Lorem ipsum dolor sit amet consectetur. Amet mattis tellus et as ectus orc.</p>
                        <Link to="" className='text-orange font-rubik font-[500] '>Read Post</Link>
                   </div>
                </div>
                <div className=' flex flex-col lg:flex-row items-center gap-[20px] p-[10px] border-[2px] border-black rounded-[20px]'>
                   <div className='flex-1 flex items-center'>
                    <img src={blog} alt="" />
                   </div>
                   <div className='flex-1 py-[20px]'>
                    <p className='font-rubik text-[20px] text-black font-[500]'>10 Creative Ways to Raise Money for Your Favorite Charity</p>
                    <p className='font-rubik text-[16px] text-black font-[400]'>Lorem ipsum dolor sit amet consectetur. Amet mattis tellus et as ectus orc.</p>
                        <Link to="" className='text-orange font-rubik font-[500]'>Read Post</Link>
                   </div>
                </div>
                <div className=' flex flex-col lg:flex-row items-center gap-[20px] p-[10px] border-[2px] border-black rounded-[20px]'>
                   <div className='flex-1 flex items-center'>
                    <img src={blog} alt="" />
                   </div>
                   <div className='flex-1 py-[20px]'>
                    <p className='font-rubik text-[20px] text-black font-[500]'>10 Creative Ways to Raise Money for Your Favorite Charity</p>
                    <p className='font-rubik text-[16px] text-black font-[400]'>Lorem ipsum dolor sit amet consectetur. Amet mattis tellus et as ectus orc.</p>
                        <Link to="" className='text-orange font-rubik font-[500]'>Read Post</Link>
                   </div>
                </div>
                <div className=' flex flex-col lg:flex-row items-center gap-[20px] p-[10px] border-[2px] border-black rounded-[20px]'>
                   <div className='flex-1 flex items-center'>
                    <img src={blog} alt="" />
                   </div>
                   <div className='flex-1 py-[20px]'>
                    <p className='font-rubik text-[20px] text-black font-[500]'>10 Creative Ways to Raise Money for Your Favorite Charity</p>
                    <p className='font-rubik text-[16px] text-black font-[400]'>Lorem ipsum dolor sit amet consectetur. Amet mattis tellus et as ectus orc.</p>
                        <Link to="" className='text-orange font-rubik font-[500]'>Read Post</Link>
                   </div>
                </div>
                
            </div>
        </div>
    )
}


const items: FaqItem[] = [
    {
      heading: "Is there a free trial?",
      content: "Yes",
    },
    {
      heading: "How many courses can I take at the same time?",
      content: "One week after the Private sale.",
    },
    {
      heading: "How can I choose my teacher?",
      content: "The Google form link would be shared in the official channel.",
    },
    {
      heading: "How much do the courses cost?",
      content: "You are only required to hodl XSN Token",
    },
    {
      heading: "How can I track my progress?",
      content:
        "The bot allows you connect your binance account to it and give it trading permission. Then you select which of the strategies you want it to trade for you, you select what market it should trade for you. If it's spot or futures. For futures you set your leverage, TP and SL %. You also set Trailing SL.",
    },
   
  ];
