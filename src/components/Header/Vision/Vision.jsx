import { Link } from 'react-router-dom';
import VisionImage from "/src/assets/images/Image-vision.png";
import TeamMans from "/src/assets/images/TeamMan1.png";
import TeamMans2 from "/src/assets/images/TeamMan2.png";
import TeamMans3 from "/src/assets/images/TeamMan3.png";
import TeamMans4 from "/src/assets/images/TeamMan4.png";
import TeamMans5 from "/src/assets/images/TeamMan5.png";
import TeamMans6 from "/src/assets/images/TeamMan6.png";
import TeamMans7 from "/src/assets/images/TeamMan7.png";
import TeamMans8 from "/src/assets/images/TeamMan8.png";
import Twitter from '/src/assets/icons/Twitter.svg'
import Instagram from '/src/assets/icons/Instagram.svg'
import Linkedin from '/src/assets/icons/Linkedin.svg'
function Vision() {
  return (
    <>
      <section className="mt-[96px] flex px-[160px]">
        <div>
          <div className="top">
            <span className="text-[14px] font-medium leading-[20px] tracking-[3px] uppercase">
              our vision
            </span>
            <h3 className="text-[36px] font-semibold leading-[54px] mt-[16px]">
              We want to get local identification in <br />
              every corner of the world in this era of <br /> global
              citizenship.
            </h3>
            <p className="text-[16px] leading-[24px] font-normal text-[#232536] mt-[24px]">
              Through True Rich Attended does no end it his mother since real
              had <br /> half every him case in packages enquire we up ecstatic
              unsatiable saw his giving <br /> Remain expense you position
              concluded.
            </p>
          </div>
          <div className="bottom mt-[64px]">
            <img
              src={VisionImage}
              alt="Vision"
              className="w-[1273px] h-[369px]"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-[96px]">
        <div>
          <div>
            <span className="font-medium leading-[20px] tracking-[3px] uppercase">
              meet our team
            </span>
            <h2 className="text-[48px] font-semibold leading-[58px] mt-[16px]">
              Teamwork is the only <br /> way we work
            </h2>
            <p className="text-[16px] font-normal leading-[24px] mt-[24px]">
              Through True Rich Attended does no end it his mother since <br />{" "}
              real had half every him case in packages enquire we up <br />{" "}
              ecstatic unsatiable.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-0 max-w-[1280px] h-[640px] mt-[64px]">

<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>

<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans2}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>

<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans3}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>

<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans4}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>
<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans5}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>


<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans6}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>

<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans7}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>
<Link 
  to="/teamtemp" 
  state={{ memberImage: TeamMans, memberName: "Bane Adam", memberRole: "Mecanic" }} 
  className="relative group block w-[320px] h-[320px] overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    src={TeamMans8}
    alt="Team 8"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 className="text-white text-[24px] font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      Bane Adam
    </h4>
    <p className="text-gray-300 text-[14px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
      Mecanic
    </p>
    <div className='flex mt-[24px] gap-[26px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
      <img src={Twitter} alt="twitter" />
      <img src={Instagram} alt="instagram" />
      <img src={Linkedin} alt="linkedin" />
    </div>
  </div>
</Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="newsletter w-[1280px] h-[333px] bg-[#666DFF] flex gap-[122px]">
          <div className="mt-[96px] pl-[96px]">
            <span className="text-white text-[14px] font-medium uppercase leading-[20px]">
              newsletter
            </span>
            <h3 className="text-white text-[36px] font-semibold">
              Subscribe our News Letter <br /> to get Latest Updates.
            </h3>
          </div>
          <div>
            <form className="bg-white w-[454px] h-[64px] mt-[141px] flex items-center shadow-sm border border-gray-100 overflow-hidden">
  <input
    className="flex-grow h-full px-[32px] text-[16px] font-medium text-[#232536] outline-none placeholder:text-gray-400"
    type="email"
    placeholder="Paresh@Pixeto.com"
    id="email"
    required
  />
  <button 
    type="submit" 
    className="h-full px-8 text-white font-semibold "
  >
  </button>
</form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vision;
