import React from "react";
import Headline from "../../components/common/Headline";
import img1 from "../../assets/images/about_img_1.jpg";
import img2 from "../../assets/images/about_img_2.jpg";
import img3 from "../../assets/images/about_img_3.jpg";
import Button from "../../components/common/Button";
const About = () => {
  return (
    <main>
      {/* Headline 1 */}
      <div className="headline custom-container px-4 py-4">
        <Headline> About us</Headline>
      </div>

      {/* Section 1 */}
 <section className="grid lg:grid-cols-3 md:grid-cols-2">
  <div className="lg:col-span-2 h-full flex flex-col gap-5 justify-between px-5 py-[30px] bg-purple-color order-2 md:order-1">
    <h2 className="font-bold uppercase font-anek-tamil xl:text-[45px] md:text-[36px] text-[28px] leading-[91%] tracking-[-3%] ">
      Tap into Your Primal Power. Forge a Stronger You.
    </h2>

    <div className="flex flex-col gap-2">
      <h5 className="font-bold font-anek-tamil text-[22px] leading-[131%] tracking-[-3%]">OUR Vision</h5>
      <p className=" md:text-base text-[15px] font-geist leading-[131%] tracking-[1%]">
        Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.
      </p>
    </div>
  </div>

  <img
    src={img1}
    alt="section1_img"
    className="w-full md:max-h-[480px] sm:max-h-[360px] max-h-[260px] object-cover order-1 md:order-2"
  />
</section>


      {/* Secction 2 */}
       <section className="grid lg:grid-cols-3 md:grid-cols-2 ">
        
        <img
          src={img2}
          alt="section2_img"
          className="lg:col-span-2 w-full h-full md:max-h-[480px] sm:max-h-[360px] max-h-[260px] object-cover"
        />
        <div className=" h-full flex flex-col gap-5 justify-between px-5 py-[30px] bg-light-purple-color">
          <h2 className="font-bold uppercase font-anek-tamil xl:text-[45px] md:text-[36px] text-[28px] leading-[91%] tracking-[-3%] ">
            DYNAMIC OPEN GYM
          </h2>

          
            <p className=" md:text-base text-[15px] font-geist leading-[131%] tracking-[1%]">At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.</p>
          
        </div>
      </section>


      {/* Section 3 */}
      <section className="md:max-h-[480px] h-[375px]  relative">
         <img src={img3} alt="" className="h-full w-full object-cover brightness-60" />
         <h2 className="absolute bottom-0 left-0 text-white max-w-[540px] uppercase font-anek-tamil font-bold xl:text-[45px] md:text-[36px] text-[28px] leading-[97%] tracking-[-3%] px-4 pb-4">
          We've created a space where you can reconnect with your primal self. 
         </h2>
      </section>


       {/* Section 4 */}
      <div className="bg-light-purple-color border-b-2 border-black w-full min-h-[480px] h-full flex flex-col items-center justify-center gap-[18px] px-4">
         <p className="uppercase font-geist  md:text-base text-[15px] leading-[131%] tracking-[1%] text-center">WHAT WE BELIEVE IN</p>
         <h3 className="text-center font-anek-tamil font-bold leading-[100%] tracking-[-5%] md:text-[57px] text-[44px] uppercase">Join the Primal Tribe Today!</h3>
        <div className="w-full flex justify-center">
          <Button className='bg-purple-color uppercase cursor-pointer hover:drop-shadow-lg'>
          Reserve your spot
         </Button>
        </div>
      </div>
    </main>
  );
};

export default About;
