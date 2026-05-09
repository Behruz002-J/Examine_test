import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from "/src/components/Footer/Footer.jsx"
function Apply() {
  return (
    <>
      <section>
        <div className="max-w-[1280px] mx-auto px-8 mt-[96px]">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Apply now
          </h1>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              placeholder="Firstname"
              className="w-full h-[96px] px-4 py-2 bg-slate-50 border border-slate-200
                         rounded-lg text-[18px] focus:outline-none focus:ring-2
                         focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="w-full h-[96px] px-4 py-2 bg-slate-50 border border-slate-200
                         rounded-lg text-[18px] focus:outline-none focus:ring-2
                         focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-[96px] px-4 py-2 bg-slate-50 border border-slate-200
                         rounded-lg text-[18px] focus:outline-none focus:ring-2
                         focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-[96px] px-4 py-2 bg-slate-50 border border-slate-200
                         rounded-lg text-[18px] focus:outline-none focus:ring-2
                         focus:ring-blue-500"
            />
          </div>

          <textarea
            placeholder="Why do you think you are a good fit for Ether?"
            rows="4"
            className="w-full h-[225px] pt-8 pl-10 bg-slate-50 border border-slate-200
                       rounded-lg text-[18px] resize-none focus:outline-none
                       focus:ring-2 focus:ring-blue-500 mb-6"
          />

          <div className="flex items-start gap-4 mb-6">
            <Checkbox
              defaultChecked
              sx={{ width: 36, height: 36, p: 0 }}
            />
            <Typography sx={{ fontSize: '16px', fontWeight: 400, mt: '6px' }}>
              I agree to accept the privacy policy. We will add your contact
              details provided in this form to our system for contacting you
              regarding your request.
            </Typography>
          </div>

          <Button
            variant="contained"
            sx={{ fontSize: '16px', width: '251px', height: '64px' }}
          >
            Submit Application →
          </Button>
        </div>
      </section>

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
        <Footer />
    </>
  );
}

export default Apply;