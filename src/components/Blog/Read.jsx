import Andrew from '/src/assets/images/Blog-anImage.png'
import Image from '/src/assets/images/Read-blog.png'
function Read() {
  return (
   <section>
    <div className="">
        <h2 className="text-[48px] font-semibold leading-[58px] mt-[96px] pl-[120px]">
            Read Recent Post
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 max-w-[1280px] mx-auto mt-[64px]">
            <div className="w-[624px] h-[248px] border border-gray-100 flex gap-[32px] overflow-hidden">
                <div>
                    <img className="w=[296px] h-[248px] object-cover" src={Image} alt="" />
                </div>
                <div classNamemt="bg-[#F9F9FF] w-full">
                    <h4 className="font-semibold text-[24px] leading-[36px] mt-[32px]">Today’s best design trends for digital products</h4>
                    <div className="flex items-center gap-3 mt-[34px]">
                          <img className="w-[40px] h-[40px] rounded-full object-cover" src={Andrew} alt="Andrew" />
                          
                          <div className="flex flex-col">
                            <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Andrew Jonson</p>
                            <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
                          </div>
                        </div>
                </div>
            </div>
                        <div className="w-[624px] h-[248px] border border-gray-100 flex gap-[32px] overflow-hidden">
                <div>
                    <img className="w=[296px] h-[248px] object-cover" src={Image} alt="" />
                </div>
                <div classNamemt="">
                    <h4 className="font-semibold text-[24px] leading-[36px] mt-[32px]">Today’s best design trends for digital products</h4>
                    <div className="flex items-center gap-3 mt-[34px]">
                          <img className="w-[40px] h-[40px] rounded-full object-cover" src={Andrew} alt="Andrew" />
                          
                          <div className="flex flex-col">
                            <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Andrew Jonson</p>
                            <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
                          </div>
                        </div>
                </div>
            </div>
                        <div className="w-[624px] h-[248px] border border-gray-100 flex gap-[32px] overflow-hidden">
                <div>
                    <img className="w=[296px] h-[248px] object-cover" src={Image} alt="" />
                </div>
                <div classNamemt="">
                    <h4 className="font-semibold text-[24px] leading-[36px] mt-[32px]">Today’s best design trends for digital products</h4>
                    <div className="flex items-center gap-3 mt-[34px]">
                          <img className="w-[40px] h-[40px] rounded-full object-cover" src={Andrew} alt="Andrew" />
                          
                          <div className="flex flex-col">
                            <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Andrew Jonson</p>
                            <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
                          </div>
                        </div>
                </div>
            </div>
                        <div className="w-[624px] h-[248px] border border-gray-100 flex gap-[32px] overflow-hidden">
                <div>
                    <img className="w=[296px] h-[248px] object-cover" src={Image} alt="" />
                </div>
                <div classNamemt="">
                    <h4 className="font-semibold text-[24px] leading-[36px] mt-[32px]">Today’s best design trends for digital products</h4>
                    <div className="flex items-center gap-3 mt-[34px]">
                          <img className="w-[40px] h-[40px] rounded-full object-cover" src={Andrew} alt="Andrew" />
                          
                          <div className="flex flex-col">
                            <p className="text-[16px] font-semibold text-[#4A4A4A] leading-none">Andrew Jonson</p>
                            <span className="text-[14px] text-[#7A7A7A] mt-1">Jan 19, 2021</span>
                          </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Read