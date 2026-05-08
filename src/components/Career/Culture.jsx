import { Link } from "react-router-dom";

function Culture() {

  const cards = [
    {
      icon: "😷",
      title: "Covid-19 insurance",
    },
    {
      icon: "⏱️",
      title: "Flexible working time",
    },
    {
      icon: "🏡",
      title: "Work from home",
    },
    {
      icon: "🎉",
      title: "Annual retreats",
    },
    {
      icon: "💰",
      title: "Learning stipend",
    },
    {
      icon: "💪",
      title: "Gym membership",
    },
  ];
  return (
    <section className="max-w-[1280px] mx-auto mt-[96px]">
      <div className="grid grid-cols-3 gap-8 bg-[#ECF8F9] p-8">
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Full Stack Developer
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Bengaluru · Full Time{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $10K - $18K · No equity
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link to="/inner" className="text-[#5D5FEF] " >
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Testing Engineer
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Remote · Full Time{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $08K - $10K · No equity
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to="/inner">
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Hr Manager
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Mumbai.Fulltime{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $08K - $10K · 4 to 5 Yrs Exp
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Product Designers
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Mumbai.Fulltime{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $08K - $10K · 4 to 5 Yrs Exp
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Wordpress Developer
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Mumbai, Full Time{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $08K - $10K · 4 to 5 Yrs Exp
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Jr. QA Tester
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            California, USA . Full Time{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $10K - $18K · No equity
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Sx.UX Designers
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            California, USA . Full Time{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $14K - $23K · No equity
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Social Media Managers
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Kolkata, India . Fulltime
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $5K - $6K · Fresher{" "}
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[354px] h-[243px] bg-white pt-[48px] pl-[48px]">
          <h6 className="text-[16px] font-semibold leading-[28px]">
            Golang Developer
          </h6>
          <p className="text-[16px] leading-[24px] font-normal mt-[10px]">
            Mumbai . Fultime{" "}
          </p>
          <p className="text-[16px] leading-[24px] font-normal mt-[3px]">
            $08K - $10K · 4 to 5 Yrs Exp
          </p>
          <ul>
            <li className="mt-[52px]">
              <Link className="text-[#5D5FEF] " to={""}>
                Apply now →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[192px]">
        <div>
          <span className="uppercase text-[14px]  font-medium leading-[20px] ">OUR WORK & CULTURE</span>
          <h3 className="text-[36px] leading-[54px] font-semibold ье-[16px]">
            Come and join a team of highly <br /> skilled professionals.
          </h3>
          <p className="text-[#232536] text-[16px] leading-[24px] mt-[24px]">
            Through True Rich Attended does no end it his mother since real had
            half <br /> every him case in packages enquire we up ecstatic
            unsatiable saw his giving <br /> Remain expense you position
            concluded.{" "}
          </p>
        </div>

        <div>
  

    <section className="w-full bg-[#FFFFFF] py-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-[14px]">
        
        {cards.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 p-8 bg-[#F4F4F4]"
          >
            <div className="w-12 h-12 rounded-full bg-[#FFEFE7] flex items-center justify-center text-xl">
              {item.icon}
            </div>

            <h2 className="mt-5 text-[22px] font-semibold text-[#232536]">
              {item.title}
            </h2>

            <p className="mt-3 text-[14px] leading-7">
              Through True Rich Attended does no end it his
              mother since real had halfdoes no end it
            </p>
          </div>
        ))}

      </div>
    </section>

        </div>
      </div>

      
      <section className="flex justify-center mt-[50px]">
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
      
    </section>
  );
}


export default Culture