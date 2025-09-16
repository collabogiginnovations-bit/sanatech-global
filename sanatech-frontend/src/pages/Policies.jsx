import React from 'react'
import PageTitleCard from '../components/morrisco/PageTitleCard'
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTASection from '../components/morrisco/CTASection';

const Policies = () => {
  useScrollAnimation()
  const cycleImages = [
    "images/policies3.jpg",
    "images/policies2.jpeg",
    "images/companyImages/Structure beginging finishing .jpg",
  ];

  return (

    <div>
      <div className='bg-[#29166F]'>
        <PageTitleCard cardTitle="Our Policies" cycleImages={cycleImages} />
      </div>
      <div className='bg-gray-100 md:px-15 '>
        <div className='mt-24'>
          <ul className='flex gap-4  py-5 px-5 justify-center items-center  text-sm flex-wrap'>
            <a href="#corporate" className=' font-semibold text-[#29166F] py-2 px-4 rounded-3xl transition-colors duration-500 hover:bg-[#170947] hover:text-white  '><li>Corporate Policy</li></a>
            <a href="#health" className='font-semibold text-[#29166F] py-2 px-4 rounded-3xl transition-colors duration-500 hover:bg-[#170947] hover:text-white  '><li>Health and Safety Policy</li></a>
            <a href="#quality" className='font-semibold text-[#29166F] py-2 px-4 rounded-3xl transition-colors duration-500 hover:bg-[#170947] hover:text-white  '><li>Quality Assurance Policy</li></a>
            <a href="#envi" className='font-semibold text-[#29166F] py-2 px-4 rounded-3xl transition-colors duration-500 hover:bg-[#170947] hover:text-white  '><li>Environmental Policy</li></a>
          </ul>
        </div>

        <div className='flex justify-center ' id='corporate'>
          <div className='mt-24 text-center px-10 sm:px-10 md:px-16 lg:px-32 section' >
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Corporate Policy</h1>

            <p className='text-[#3d3d3d] text-center md:text-center'>
              Our policy surpasses economic value creation to
              acknowledge the importance of social and
              environmental capital and value creation setting out
              our commitment, responsibility and approach.
              We are committed to fulfilling or surpassing all
              legislatures and regulations in all our business
              activities.
            </p>
          </div>
        </div>
        <div className='flex justify-center ' id='health'>
          <div className='mt-24 text-center px-10 sm:px-10 md:px-16 lg:px-32 section'>
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Health and Safety Policy</h1>

            <p className='text-[#3d3d3d]  text-center'>
              Sanatech Global, operating in infrastructure
              development field, shall provide and maintain high
              standard of health & safety for all its employees and
              the general public who may be affected by the
              operation, according to applicable health & safety
              regulations and safety manual of the company.
              Creating awareness by training, sharing information &
              supervision, and maintaining preparedness to meet
              health & safety emergencies to ensure a safe and
              healthy working environment at all offices and sites.
            </p>
          </div>
        </div>
        <div className='flex justify-center ' id='quality'>
          <div className='mt-24 text-center px-10 sm:px-10 md:px-16 lg:px-32 section' >
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Quality Assurance Policy</h1>

            <p className='text-[#3d3d3d]  text-center'>
              The policy of Sanatech Global is to empower all employees to create, implement
              and improve our services to meet and exceed external and internal customer
              expectaons.Sanatech Global pledges to train all personnel in Connnuous
              Process Improvement (CPI); to provide the financial resources necessary to
              ConnuousProcess Improvement; and to create a work environment which
              develops mo ated, knowledgeable employees ccommied to the corporate
              mission. ConnuousProcess Improvement will be driven toward improved
              customer saffacoand enhanced customer loyalty.
            </p>
          </div>

        </div>
        <div className='flex justify-center ' id='envi' >
          <div className='my-24 text-center px-10 sm:px-10 md:px-16 lg:px-32 section' >
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Environmental Policy</h1>

            <p className='text-[#3d3d3d] text-start '>
              Sanatech Global recognizes that in carrying out its acvie it has a responsibility
              to customers, employees, and the general public to minimize environmental
              impacts. The environmental policy of Sanatech Global is to:
              <ul className='list-disc flex flex-col items-start mt-5 text-start pl-5'>
                <li>Ensure compliance with all applicable legal and other requirements, which relate
                  to its environmental aspects. </li>
                <li>Promote environmental awareness and commitment to the policy amongst all
                  employees and Stake Holders through training, and communicatons to
                  encourage suppliers and subcontractors to apply sound environmental
                  principles. </li>
                <li>Avoid the wastage of materials, water, and energy by paying careful atennoto
                  their use.</li>
                <li>Prevent polluonand minimize environmental disturbance from our acvies.</li>
                <li>Apply connual improvement by reviewing the environmental aspects related to
                  our acvies by seng appropriate targets and objecves for improving .</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  )
}

export default Policies