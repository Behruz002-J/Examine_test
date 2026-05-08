  import Turn from '/src/assets/icons/turn-icon.svg'
  import Stack from '@mui/material/Stack';
  import Button from '@mui/material/Button';
  import { useState } from "react";

  function Inner() {
        const [activeTab, setActiveTab] = useState("details");
  
    const content = {
      details: [
        "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
        "Design & Create highly engaging industry-related content in both photo, gif & video format",
        "Publish Posts on various social media channels",
        "Promote content on social networks and monitor engagement (e.g. comments and shares)",
        "Research industry-related topics",
        "Editing audio and sound design on projects",
        "Engage in opportunities to develop original content and concepts for web and mobile",
        "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
        "Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels"
      ],
      requirements: [
        "At least 2 years of experience in Video Editing.",
        "Proficiency in Adobe Premiere Pro, After Effects.",
        "Understanding of social media trends and algorithms.",
        "Good communication and teamwork skills.",
        "This is good responsibility in every people",
        "This is good responsibility in every people",
        "This is good responsibility in every people",
      ],
      responsibilities: [
        "Leading the creative team for video production.",
        "Ensuring all content aligns with brand guidelines.",
        "Weekly reporting on social media environment.",
        "Weekly reporting on social media felling.",
        "Weekly reporting on social media engagement.",
        "Weekly reporting on social media engagement.",
        "Weekly reporting on social media engagement.",
      ]
    };

    return (
      <main>
        <section>
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

         <section>
        
        <div className="max-w-[1280px] mx-auto mt-10">
        <div className="flex gap-[98px] pl-[150px] border-b-2 border-gray-100 relative">
          {["details", "requirements", "responsibility"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[24px] leading-[36px] font-semibold pb-4 capitalize transition-all relative ${
                activeTab === tab ? "text-[#454DFD]" : "text-black"
              }`}
            >
              {tab === "responsibility" ? "Responsibilities" : tab}
  
              {activeTab === tab && (
                <span className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#454DFD] rounded-t-md"></span>
              )}
            </button>
          ))}
        </div>
  
        <div className="mt-10 pl-[150px] pr-[100px]">
          <ul className="space-y-4 list-disc list-outside text-gray-700">
            {content[activeTab === "responsibility" ? "responsibilities" : activeTab].map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
  
         </section>
        </main>
    )
  }
  export default Inner

  
      