import React, { useState, useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageTitleCard from '../components/morrisco/PageTitleCard';
import CoreValueCard from '../components/morrisco/CoreValueCard';
import CTASection from '../components/morrisco/CTASection';

const About = () => {
  const cycleImages = [
    "images/companyImages/IMG-20250527-WA0025.jpg",
    "images/companyImages/Valves control I&C.jpg",
    "service/cctv.jpg",
    "service/solar.jpg",
  ];
  useScrollAnimation()
  const [collaps, setCollaps] = useState(false);

  const handleCollaps = () => {
    setCollaps(!collaps)
  }


  return (
    <section className='min-h-screen my-16 section '>
      <div className='bg-amber-800'>
        <PageTitleCard cycleImages={cycleImages} imageName="AboutTitleCard.png" cardText="Registraon No.: C981243 | TIN: 14381774-0001" cardTitle="About SANATECH" textColor="text-white" />
      </div>
      <div className='flex justify-center section md:px-15' >
        <div className='my-24 text-center px-10 sm:px-10 md:px-16 lg:px-32'>
          <p className={`align-middle  transition-all duration-500 ease-in-out overflow-hidden mb-3 
        ${collaps ? 'max-h-[2000px]' : 'max-h-40'}`}>
            Sanatech Global was established 2009 and registered with the corporate
            affairs commission in 2011 to do business in Nigeria, and are Dedicated
            to deliver state-of-the-art design, installaon,and support to meet all
            your engineering needs. We service the commercial, industrial, and
            public sector industries. Sanatech Global is commited to implemennng
            the latest technologies and industry pracces to provide our clients with
            the soluons needed for success in today's marketplace.
            We provide clients with experience, quality, dedicaton, and
            professionalism, and as a result have become one of the leaders in
            providing engineering services to this region of the country.
            We pride ourselves on quality workmanship and service excellence. Our
            sound knowledge of the Engineering Industry acquired from number of
            projects allows us to be hands on in every aspect of the job from the
            beginning to end.

          </p>
          <div>
            <button className='bg-transparent text-[#29166F]' onClick={handleCollaps} >{collaps ? "Collapse" : "Read More"}</button>
          </div>
        </div>
      </div>
      <div className='min-h-80 mb-24 px-4 section text-start md:text-start'>
        <div className={`grid grid-cols-1 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl  justify-center flex-col bg-[#29166F]`} >
          <div className='pr-14 ml-5 flex flex-col justify-center'>
            <h1 className='text-3xl font-bold text-white mb-5'>Our Vision</h1>
            <p className='text-gray-100'>Our vision is to be the world’s premier engineering,
              construction, project management organization by
              achieving extraordinary results for our customers,
              building satisfying careers for people, and earning
              a fair return on value we deliver without compromise
              to safety and the environment.
            </p>
          </div>
          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 ' style={{ backgroundImage: "url('images/Rectangle 22.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >

            </div>
          </div>

        </div>
      </div>

      <div className='min-h-80 mb-24 px-4 section'>
        <div className={`grid grid-cols-1 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col `} >
          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 ' style={{ backgroundImage: "url('images/mission.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >

            </div>


          </div>

          <div className=' flex flex-col justify-center pr-5 text-start md:text-start md:pl-10'>
            <h1 className='text-3xl  font-bold text-[#29166F] mb-5'>Our Mission</h1>
            <p>We regard our work ethics in highest nature, to be productive and pro-active in our
              projects to be accountable for all work undertaken
              by Sanatech global. we pride ourselves in quality
              that speaks for itself without compromising safety
              and reliability. we respect that each project
              deserves our attention to detail attitude.</p>

          </div>


        </div>
      </div>







      <div className='min-h-80 mb-24 px-4 section'>
        <div className={`flex flex-col justify-center items-center bg-center py-8   pl-4 min-h-80 gap-3 rounded-xl  bg-[#251362]`} style={{ backgroundImage: "url('images/bob.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>

          <div className=' flex justify-center items-center my-6'>
            <div className='flex items-center justify-center m-2 bg-transparent lg:m-5 '  >
              <h1 className='text-3xl font-bold text-white mb-5 text-center'>Our Core Values</h1>

            </div>


          </div>

          <div className='pr-10 flex flex-col justify-center items-center mb-3'>
            <CoreValueCard />

          </div>


        </div>
      </div>
      <div className='min-h-80 mb-24 px-5 section'>
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col `} >
          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 ' style={{ backgroundImage: "url('images/office.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >

            </div>


          </div>

          <div className=' flex flex-col pr-5 justify-center text-start md:text-start md:pl-10'>
            <h1 className='text-3xl  font-bold text-[#29166F] mb-5'>Corporate Office</h1>
            <p>Suite 25, Second Floor Hilltop Plaza,
              Trans Woji Road By Elitor juncon,
              Woji, Port Harcourt,
              Rivers State,
              Nigeria. </p>

          </div>


        </div>
      </div>








      <div className='flex justify-center section'>
        <div className='mb-24 text-center px-10 sm:px-10 md:px-16 lg:px-32'>
          <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Our Bank</h1>

          <p className='text-black  '>
            <span className='font-semibold'>Bank Name:</span> First Bank of Nigeria Plc. <br />
            <span className='font-semibold'>Acct. Name: </span> Sanatech Global Nig. Ltd. <br />
            <span className='font-semibold'>Acct. No.: </span> 2021973837  <br />
            <span className='font-semibold'>Sort Code: </span> 011217125
          </p>
        </div>
      </div>
      <div className='section'>
        <CTASection />
      </div>
    </section>
  )

}

export default About