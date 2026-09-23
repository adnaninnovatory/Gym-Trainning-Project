import React from 'react'
import Headline from '../../components/common/Headline'
import Button from '../../components/common/Button'

const Reserve = () => {
  return (
    <main>
      {/* Headline 1 */}
      <div className="headline custom-container px-4 py-4">
        <Headline>  Book a <span className="text-purple-color">session</span></Headline>
      </div>

      {/* session cards */}
      <div className='grid md:grid-cols-3'>
        {/* One */}
        <div className='md:h-[480px] h-[420px]  bg-light-purple-color lg:p-[30px] p-5 relative border-y border-black'>
          <div className='flex flex-col gap-20'>
            <h2 className='font-anek-tamil xl:text-[45px] md:text-[36px] text-[28px] leading-[91%] tracking-[-3%] font-bold uppercase'>Strength</h2>
            <div className='flex flex-col gap-6'>
               <p className='pb-2 border-b border-black font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Weekdays at 6AM</p>
               <p className='pb-2 border-b border-black font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Weekends and Holidays at 8AM</p>
               <p className='font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Build a foundation of raw power with our comprehensive weightlifting and strength training programs. </p>
            </div>
          </div>
          <Button className="absolute lg:bottom-[30px] bottom-5 bg-purple-color lg:w-[calc(100%-60px)] w-[calc(100%-40px)] uppercase  cursor-pointer hover:drop-shadow-lg">Reserve Your Spot</Button>
        </div>
        {/* Two */}
         <div className='md:h-[480px] h-[420px] bg-light-purple-color lg:p-[30px] p-5 relative md:border border-y border-black'>
          <div className='flex flex-col gap-20'>
            <h2 className='font-anek-tamil xl:text-[45px] md:text-[36px] text-[28px] leading-[91%] tracking-[-3%] font-bold uppercase'>Conditioning</h2>
            <div className='flex flex-col gap-6'>
               <p className='pb-2 border-b border-black font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Weekdays at 8AM</p>
               <p className='pb-2 border-b border-black font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Weekends and Holidays at 10AM</p>
               <p className='font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness. </p>
            </div>
          </div>
          <Button className="absolute lg:bottom-[30px] bottom-5 bg-purple-color lg:w-[calc(100%-60px)] w-[calc(100%-40px)] uppercase  cursor-pointer hover:drop-shadow-lg">Reserve Your Spot</Button>
        </div>

        {/* Three */}
         <div className='md:h-[480px] h-[420px] bg-light-purple-color lg:p-[30px] p-5 relative border-y border-black'>
          <div className='flex flex-col gap-20 pb-5'>
            <h2 className='font-anek-tamil xl:text-[45px] md:text-[36px] text-[28px] leading-[91%] tracking-[-3%] font-bold uppercase'>COMMUNITY CLASSES</h2>
            <div className='flex flex-col gap-6'>
               <p className='pb-2 border-b border-black font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Every day on the hour</p>
               {/* <p className='pb-2 border-b border-black font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Weekends and Holidays at 8AM</p> */}
               <p className='font-geist xl:text-[19px] text-[17px] leading-[131%] tracking-[-3%]'>Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.</p>
            </div>
          </div>
          <Button className="absolute lg:bottom-[30px] bottom-5 bg-purple-color lg:w-[calc(100%-60px)] w-[calc(100%-40px)] uppercase  cursor-pointer hover:drop-shadow-lg">Reserve Your Spot</Button>
        </div>
      </div>



       {/* Section */}
      <div className="bg-purple-color w-full min-h-[480px] h-full flex flex-col items-center justify-center gap-[18px] px-4">
         <h3 className="text-center font-anek-tamil font-bold leading-[100%] tracking-[-5%] md:text-[57px] text-[44px] uppercase max-w-[780px]">Primal Personal Training</h3>
         <p className="font-geist md:text-base text-[15px] leading-[131%] tracking-[1%] text-center max-w-[780px]">Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.</p>
        <div className="w-full flex justify-center">
          <Button className='bg-light-purple-color uppercase cursor-pointer hover:drop-shadow-lg'>
          Reserve your spot
         </Button>
        </div>
      </div>
    </main>
  )
}

export default Reserve
