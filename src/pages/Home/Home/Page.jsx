import Footer from "../../../components/Footer/Footer";
import Expertise from "../../../components/Header/Expertise/Expertise";
import Vision from "../../../components/Header/Vision/Vision";
import OfficeImg1 from "/src/assets/images/company-worker1.png";
import OfficeImg2 from "/src/assets/images/company-worker2.png";
import OfficeImg3 from "/src/assets/images/company-worker3.png";
import LogoI from '/src/assets/logos/Logoipsum1.svg'
import Logo2 from '/src/assets/logos/Logoipsum2.svg'
import Logo3 from '/src/assets/logos/Logoipsum3.svg'
import Logo4 from '/src/assets/logos/Logoipsum4.svg'
import Logo5 from '/src/assets/logos/Logoipsum5.svg'

function CompanySection() {
  return (
    <>
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* 1. Yuqori sarlavha qismi */}
        <div className="mb-16 max-w-[800px]">
          <span className="text-sm font-semibold tracking-widest text-[#1D1E2C] uppercase block mb-4">
            Company
          </span>
          <h2 className="text-[48px] md:text-5xl font-bold text-[#1D1E2C] leading-[58px] mb-8">
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p className="text-gray-500 text-lg leading-[28px] max-w-[650px]">
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout.
          </p>
        </div>

        {/* 2. Rasmlar galereyasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="overflow-hidden rounded-sm"><img src={OfficeImg1} alt="" className="w-full h-[450px] object-cover hover:scale-105 transition duration-500" /></div>
          <div className="overflow-hidden rounded-sm"><img src={OfficeImg2} alt="" className="w-full h-[450px] object-cover hover:scale-105 transition duration-500" /></div>
          <div className="overflow-hidden rounded-sm"><img src={OfficeImg3} alt="" className="w-full h-[450px] object-cover hover:scale-105 transition duration-500" /></div>
        </div>

        {/* 3. OUR STORY SECTION (To'g'irlangan qism) */}
        <div className="flex flex-col md:flex-row items-stretch w-full min-h-[400px]">
          
          {/* Chap tomon: Matn */}
          <div className="flex-1 md:pr-16 py-10">
            <div className="flex items-center gap-2 mb-4">
              <h6 className="text-[16px] font-bold text-gray-800 uppercase tracking-wide">Our Story</h6>
              <span className="text-yellow-500">👇</span>
            </div>
            
            <h3 className="text-[36px] md:text-[48px] font-bold leading-[1.1] text-slate-900 mb-6">
              From Startups to Titans of <br className="hidden md:block" /> Industry
            </h3>
            
            <p className="text-gray-500 leading-[28px] text-[16px] max-w-lg">
              Through True Rich Attended does no end it his mother since 
              favourable real had half every him case in packages enquire we up 
              ecstatic unsatiable saw his giving Remain expense of gay produce 
              excited perceived do an a china mean its so ye when in explained 
              Hearts am next over match mr partiality not shoud latter thus as out.
            </p>
          </div>

          {/* O'ng tomon: Sariq blok (Muhim: w-[624px] olib tashlandi) */}
          <div className="w-full md:w-[480px] lg:w-[518px] bg-[#FFEBD1] p-10 md:p-16 flex items-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 w-full">
              
              <div>
                <div className="text-[36px] font-bold text-slate-900">1560+</div>
                <div className="flex h-[5px] w-12 my-2">
                  <div className="w-1/3 bg-blue-600"></div>
                  <div className="w-2/3 bg-orange-400"></div>
                </div>
                <p className="text-[14px] font-bold text-gray-800">Project Delivered</p>
              </div>

              <div>
                <div className="text-[36px] font-bold text-slate-900">100+</div>
                <div className="flex h-[5px] w-12 my-2">
                  <div className="w-1/3 bg-blue-600"></div>
                  <div className="w-2/3 bg-orange-400"></div>
                </div>
                <p className="text-[14px] font-bold text-gray-800">Professional</p>
              </div>

              <div>
                <div className="text-[36px] font-bold text-slate-900">950+</div>
                <div className="flex h-[5px] w-12 my-2">
                  <div className="w-1/3 bg-blue-600"></div>
                  <div className="w-2/3 bg-orange-400"></div>
                </div>
                <p className="text-[14px] font-bold text-gray-800">Happy Client</p>
              </div>

              <div>
                <div className="text-[36px] font-bold text-slate-900">10 yrs</div>
                <div className="flex h-[5px] w-12 my-2">
                  <div className="w-1/3 bg-blue-600"></div>
                  <div className="w-2/3 bg-orange-400"></div>
                </div>
                <p className="text-[14px] font-bold text-gray-800">Experience</p>
              </div>

            </div>
          </div>
        </div>

        {/* 4. Logotiplar (Chiroyli tartibda) */}
        <div className="flex  justify-between items-center ">
          <img src={LogoI} alt="Logo" className="" />
          <img src={Logo2} alt="Logo" className="" />
          <img src={Logo3} alt="Logo" className="" />
          <img src={Logo4} alt="Logo" className="" />
          <img src={Logo5} alt="Logo" className="" />
        </div>

      </div>
    </section>
    <div>
      <Expertise />
      <Vision />
      <Footer />
    </div>
</>
  );
}

export default CompanySection;