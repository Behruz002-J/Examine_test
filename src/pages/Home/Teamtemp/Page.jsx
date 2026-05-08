import Teams from '/src/assets/images/TeamMan3.png'
import Teamplate1 from '/src/assets/images/Teamplate1.png'
import Teamplate2 from '/src/assets/images/Teamplate2.png'
import Footer from '../../../components/Footer/Footer'
import { useLocation, Link } from 'react-router-dom';

function Teamtemp() {
  const location = useLocation();
  const { memberImage, memberName, memberRole } = location.state || {
    memberImage: Teams,
    memberName: "Javena Melo",
    memberRole: "CEO"
  };

  return (
    <>
      <main>
        <section className='flex justify-center'>
          <div className='w-[505px] h-[594px] mt-[96px] text-center'>
            <div>
              {/* Dinamik rasm */}
              <img 
                className='w-[320px] h-[320px] rounded-[50%] mx-auto object-cover' 
                src={memberImage} 
                alt={memberName} 
              />
              {/* Dinamik ism */}
              <h3 className='text-[36px] leading-[54px] font-semibold mt-[48px]'>
                {memberName}
              </h3>
              {/* Dinamik lavozim */}
              <p className='uppercase text-[14px] font-medium mt-[8px]'>
                {memberRole}
              </p>
            </div>
            <div>
              <p className='text-[16px] leading-[24px] text-[#232536] font-normal mt-[24px]'>
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <section className='bg-[#ECF8F9] w-full py-[100px]'>
        <div className='max-w-[1280px] mx-auto'>
          <h2 className='text-[48px] leading-[54px] font-semibold mb-[48px] pl-[32px]'>
            Blog posts from {memberName.split(' ')[0]}
          </h2>

          <div className='flex gap-[32px] justify-center flex-wrap'>
            {/* Blog 1 */}
            <div className='w-[624px] h-[248px] flex'>
              <img src={Teamplate1} alt="" className="w-1/2 object-cover" />
              <div className='bg-white w-1/2 pl-[32px] flex flex-col justify-center'>
                <p className='text-[#232536] text-[14px] font-medium'>Jan 19, 2021</p>
                <h4 className='text-[24px] font-semibold leading-[36px] mt-[8px]'>
                  Today’s best design trends for digital products
                </h4>
                <Link to="#" className='text-[#444CFC] mt-[24px] font-semibold'>
                  Read more 
                </Link>
              </div>
            </div>

            {/* Blog 2 */}
            <div className='w-[624px] h-[248px] flex'>
              <img src={Teamplate2} alt="" className="w-1/2 object-cover" />
              <div className='bg-white w-1/2 pl-[32px] flex flex-col justify-center'>
                <p className='text-[#232536] text-[14px] font-medium'>Jan 19, 2021</p>
                <h4 className='text-[24px] font-semibold leading-[36px] mt-[8px]'>
                  A practical guide to building a brand strategy
                </h4>
                <Link to="#" className='text-[#444CFC] mt-[24px] font-semibold'>
                  Read more 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Teamtemp;