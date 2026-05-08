
import CareerImage from '/src/assets/images/CareeerImage.png'
function Careers() {
  return (
    <main>
      <section className='flex justify-center'>
     <div className="mt-[96px]">
      <span className ="uppercase flex justify-center font-medium text-[14px] heading-[20px]">CAREER AT FINSWEET</span>
      <h2 className="flex justify-center text-[48px] leading-[58px] font-semibold items-center mt-[24px]">We hired people who are <br />
Always Passionate about <br /> what they do</h2>
<p className="flex justify-center text-[16px] leading-[24px] font-normal mt-[24px]">Through True Rich Attended does no end it his mother since real had half <br /> every him case in packages enquire we up ecstatic unsatiable saw .</p>
<img className="mt-[64px]" src={CareerImage} alt="" />
<p className="mt-[80px] flex justify-center">See our open positions</p>
<span className="flex justify-center mt-[16px]">👇</span>
     </div>
     
   </section>
    </main>
  )
}

export default Careers