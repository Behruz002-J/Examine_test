    import React from 'react'
    
    function Newsletter() {
      return (
          <section className="flex justify-center mt-[96px]">
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
              <button type="submit" className="h-full px-8 text-white font-semibold">
              </button>
            </form>
          </div>
        </div>
      </section>
      )
    }
    
    export default Newsletter