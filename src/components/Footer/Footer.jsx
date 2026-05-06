import Logo from "/src/assets/logos/logo-findsweet copy.svg";
import Facebook from "/src/assets/icons/facebook.svg";
import Twitter from "/src/assets/icons/Twitter.svg";
import Instagram from "/src/assets/icons/Instagram.svg";
import Linkedin from "/src/assets/icons/Linkedin.svg";

function Footer() {
  return (
    <footer className="bg-[#F9F9FF] mt-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex justify-between">
        <div className="max-w-[400px]">
          <div className="mb-6">
            <div className="w-6 h-6 bg-gradient-to-r"></div>
          </div>

          <h2 className="text-[48px] font-semibold leading-[58px] text-[#232536]">
            Let's make <br />
            something special
          </h2>

          <p className="mt-6 font-medium">Let's talk! 👍</p>

          <p className="mt-4 text-[14px]">020 7993 2905</p>
          <p className="text-[14px]">hi@finsweet.com</p>

          <div className="mt-6 border-t pt-4 text-[12px] text-gray-500">
            DLF Cybercity, Bhubaneswar, <br />
            India, &52050
          </div>
        </div>

        <div className="flex gap-20">
          {/* COLUMN 1 */}
          <ul className="space-y-3 text-[14px]">
            <li className="font-semibold">Home</li>
            <li className="#232536 text-[16px] leading-[28px] font-semibold">
              Service
            </li>
            <li className="#232536 text-[16px] leading-[28px] font-semibold">
              Company
            </li>
            <li className="#232536 text-[16px] leading-[28px] font-semibold">
              Career
            </li>
            <li className="#232536 text-[16px] leading-[28px] font-semibold">
              News
            </li>
          </ul>

          {/* COLUMN 2 */}
          <ul className="space-y-3 text-[14px]">
            <li className="font-semibold">Service</li>
            <li>Technical support</li>
            <li>Testing</li>
            <li>Development</li>
            <li>AWS/Azure</li>
            <li>Consulting</li>
            <li>Information Technology</li>
          </ul>

          {/* COLUMN 3 */}
          <ul className="space-y-3 text-[14px]">
            <li className="font-semibold">Resources</li>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* CONTACT BUTTON */}
      <div className="max-w-[1200px] mx-auto px-6 pb-10 flex justify-end">
        <button className="flex items-center gap-2 text-[14px]">
          <span className="w-6 h-3 bg-gradient-to-r "></span>
          Contact Us →
        </button>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#FFE6D2] py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img className="invert" src={Logo} alt="" />
            <span className="text-[14px] text-black font-medium">
              ©2021 Finsweet
            </span>
          </div>

          <div className="flex gap-4">
            <img className="" src={Facebook} alt="" />
            <img className="invert" src={Twitter} alt="" />
            <img className="invert" src={Instagram} alt="" />
            <img className="invert" src={Linkedin} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
