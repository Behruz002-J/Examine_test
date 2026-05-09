import Andrew from "/src/assets/images/Blog-ManImage.png";
import MainImage from "/src/assets/images/Image-vision.png"
import Footer from "/src/components/Footer/Footer.jsx"
function Main() {
  return (
    <>
    <main>
      <section className="ml-[160px]">
        <div>
          <h2 className="text-[48px] font-semibold leading-[58px] mt-[144px]">
            Breaking the code How did we <br /> build our Figma plugin{" "}
          </h2>
          <p className="mt-[24px]">
            It is a long established fact that a reader will be distracted by
            the readable content of <br /> a page when looking at its layout.
            The Maker is a decentralized. We aim to attain the <br /> greatest
            satisfaction for our clients
          </p>
          <div className="flex  gap-[12px] mt-[32px]">
            <img
              className="w-[40px] h-[40px] rounded-full object-cover"
              src={Andrew}
              alt="Andrew"
            />

            <div className="flex items-center justify-center gap-[32px]">
              <p className="text-[16px] font-semibold text-[#4A4A4A] leading-tight">
                Andrew Jonson
              </p>
              <span className="text-[14px] text-[#7A7A7A] font-medium mt-1">
                Posted on 27th January 2021 
              </span>
            </div>
          </div>
        </div>

        <div className=" mt-[96px] ">
        <img src={MainImage} alt="" />
        </div>

      </section>

      <section className="w-[844px] h-[1148px] ml-[377px] mt-[96px]">
        <div>
          <div>
              <h3 className="text-[36px] leading-[] font-semibold">
            Transform Your Idea Into Reality with Ether a <br /> Leading Digital Agency
          </h3>
          <p className="pt-[24px] text-[16px] leading-[24px] font-normal">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>

          <p className="pt-[24px] text-[16px] leading-[24px] font-normal">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>

          <p className="pt-[24px] text-[16px] leading-[24px] font-normal">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>

          <p className="pt-[24px] text-[16px] leading-[24px] font-normal">
            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.
          </p>
          </div>
           
           <div className="mt-[40px]">
             <h4 className="text-[24px] font-semibold leading-[36px]">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
            <p className="pt-[24px] text-[16px] leading-[24px] font-normal">Step 1: Download the plugin from Figma community, search Ghost UXWriter
            Step 2: Open the plugin on your artboard
            Step 3: Search for your copy or look through the different categories of the copies
            Step 4: Select the type of error you are looking for. You will get three different copies for each error
            Step 5: Tap on the cards to insert text in your frames
            And you are all geared up to make your UX copies more fun and exciting 😎</p>
           </div>

           <div>
            <h4 className="text-[24px] font-semibold leading-[36px]" >
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h4>
            <p className="pt-[24px] text-[16px] leading-[24px] font-normal">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
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
    </main>
    <Footer />
    </>
  );
}

export default Main;
