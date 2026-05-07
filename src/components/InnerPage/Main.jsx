import Andrew from "/src/assets/images/Blog-ManImage.png";
function Main() {
  return (
    <main>
      <section>
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
      </section>
    </main>
  );
}

export default Main;
