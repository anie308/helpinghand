import bglogo from '../assets/ctalogo.png'


function Cta() {
  return (
    <div className="bg-green h-[250px] lg:h-[400px] w-full flex items-center justify-center lg:justify-end relative">
        <img src={bglogo} className="h-[300px]" alt="" />
        <div className='absolute top-0 w-full h-full py-[20px] px-[20px] lg:px-[100px] flex flex-col lg:flex-row items-center justify-start lg:justify-between'>
            <div>
            <p className="font-rubik text-[30px] lg:text-[70px] font-[800] text-white leading-[30px] lg:leading-[70px]">Sign up for our <br className="hidden lg:block" /> Newsletter</p>
            <p className="font-rubik font-[600] text-white mt-[10px]">Stay in the loop with everything you need to know.</p>
            </div>
            <div className='w-full bg-white rounded-full flex items-center lg:w-[40%] mt-[20px] lg:mt-0 '>
                <input type="text" className='bg-white outline-none font-rubik pl-[20px] w-full h-[40px] lg:h-[60px] rounded-l-full' placeholder='Email Address' />
                <button className='outline-none font-rubik text-white font-[400] lg:font-[500] text-[14px] lg:text-[18px] bg-orange h-[40px] lg:h-[60px] rounded-full w-[150px] lg:w-[250px]'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Cta