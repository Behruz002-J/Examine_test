import { Link } from 'react-router-dom'
import Andrew from '/src/assets/images/Blog-anImage.png'
import Mothew from '/src/assets/images/Blog-manImage2.png'
import Hussen from '/src/assets/images/Blog-ManImage.png'
import Turn from '/src/assets/icons/turn-icon.svg'
import Comp from '/src/assets/images/Image-vision.png'
function Main() {
  return (
  <main>
    <section>
        <div className="flex gap-[141px] justify-center mt-[96px]">
        <div className="left-0 mt-[45px]">
                <span className="uppercase text-[14px] font-medium leading-[20px] ">
                TREnding
            </span>
            <h2 className="text-[48px] leading-[58px] font-semibold mt-[24px]">Breaking the code How <br /> did we build our Figma <br /> plugin </h2>
            <p className="text-[#232536] text-[16px] font-normal mt-[24px]">It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. The Maker is a decentralized. We <br /> aim to attain the.</p>
            <ul className="flex flex-row">
                <li className="text-[#444CFC] flex">
                    <Link to="/innerpage">Read more
                    <img src={Turn} className="invert "  alt="" />
                    </Link>
                </li>
            </ul>
            
            <div className="flex items-center gap-3">
      <img className="w-[40px] h-[40px] rounded-full object-cover" src={Andrew} alt="Andrew" />
      
      <div className="flex  items-center gap-[32px]">
        <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Andrew Jonson</p>
        <span className="text-[16px] text-[#7A7A7A] font-medium">Posted on 27th January 2021</span>
      </div>
    </div>
    <div>
        <img className="w-[608px] h-[390px] cover" src={Comp} alt="" />
    </div>
        </div>
        

        <div className="right w-[515px] h-[738px] bg-[#FFDFC6]">
       <div className=""> 

  <div className="space-y-12 p-8 bg-[#FDE2CC]"> 
  <div className="max-w-[400px]">
    <h4 className="text-[#2D2D2D] text-[24px] font-semibold leading-tight mb-4">
      Great design expectations prejudice in digital products in Next Year
    </h4>
    
    <div className="flex items-center gap-3">
      <img className="w-[40px] h-[40px] rounded-full object-cover" src={Andrew} alt="Andrew" />
      
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Andrew Jonson</p>
        <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
      </div>
    </div>
  </div>
</div>
  <div className="space-y-12 p-8 bg-[#FDE2CC]"> 
  <div className="max-w-[400px]">
    <h4 className="text-[#2D2D2D] text-[24px] font-semibold leading-tight mb-4">
      Great design expectations prejudice in digital products in Next Year
    </h4>
    
    <div className="flex items-center gap-3">
      <img className="w-[40px] h-[40px] rounded-full object-cover" src={Mothew} alt="Andrew" />
      
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Mathew Jasele</p>
        <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
      </div>
    </div>
  </div>
</div>
  <div className="space-y-12 p-8 bg-[#FDE2CC]"> 
  <div className="max-w-[400px]">
    <h4 className="text-[#2D2D2D] text-[24px] font-semibold leading-tight mb-4">
      Great design expectations prejudice in digital products in Next Year
    </h4>
    
    <div className="flex items-center gap-3">
      <img className="w-[40px] h-[40px] rounded-full object-cover" src={Hussen} alt="Andrew" />
      
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Hussen Ababaks</p>
        <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
      </div>
    </div>
  </div>
</div>
</div>
        <div></div>
        <div></div>

        </div>
        </div>

    </section>
  </main>
  )
}

export default Main