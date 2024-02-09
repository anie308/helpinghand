import epic from '../assets/epic.svg'
import market from '../assets/market.svg'
import global from '../assets/global.svg'
import next from '../assets/next.svg'
import ex from '../assets/ex.svg'
import team from '../assets/team.svg'
function Trustee() {
  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
        <p className="font-rubik text-[16px] lg:text-[20px] text-center">Trusted by more than 5 million volunteers in 120 countries</p>
        <div className='mt-[20px] flex flex-col justify-center lg:flex-row space-y-[20px] lg:space-y-0 lg:space-x-[40px] items-center'>
        <img src={epic} alt="" />
        <img src={market} alt="" />
        <img src={global} alt="" />
        <img src={next} alt="" />
        <img src={ex} alt="" />
        <img src={team} alt="" />
        </div>
    </div>
  )
}

export default Trustee