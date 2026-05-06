import Turn from '/src/assets/icons/turn-icon.svg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Careers() {
  return (
    <main>
      <section className='flex justify-center'>
        <div className='flex gap-[56px] mt-[96px]'>
         <div className='left w-[490px] h-[270px]  mt-[31px]'>
           <span className='text-[14px] leading-[20px] uppercase font-medium'>CAREER AT Ether</span>
          <h2 className='text-[48px] leading-[58px] font-semibold pt-[24px]'>Full Stack Developer</h2>
          <p className='text-[#232536] text-[16px] leading-[24px] font-normal pt-[16px]'>Through True Rich Attended does no end it his mother <br /> since real had half every him case in packages.</p>
    <div >
      <Stack spacing={2} direction="row">
      <Button 
        variant="contained" 
        endIcon={<img src={Turn} alt="icon" style={{ width: '20px', height: '20px' }} />}
        sx={{
          backgroundColor: '#444CFC', 
          padding: '12px 32px',
          textTransform: 'none', 
          mt:5,
          '&:hover': {
            backgroundColor: '#333abd',
          }
        }}
      >
        Contained
      </Button>
    </Stack>
    </div>
    
       </div>
         <div className='left bg-[#FFE0C7] w-[515px] h-[324px] pt-[82px] pl-[80px]'>
       <h4 className='text-[24px] leading-[36px] font-semibold'>Job Description</h4>
       <div>
        <p className='text-[16px] leading-[24px] pt-[24px]'>Remote, India , 4 to 5 Years Of Experience</p>
        <p className='text-[16px] leading-[24px] pt-[16px]'>Department: Product Engineering</p>
        <p className='text-[16px] leading-[24px] pt-[8px]'>Full Time 5 Position Available.</p>
       </div>
         </div>
        </div>

      </section>
    </main>
  )
}

export default Careers