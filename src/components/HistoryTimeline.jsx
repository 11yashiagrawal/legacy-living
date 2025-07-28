import React from 'react'
import Card from './Card'
import { iconMap } from './IconMap';
import ScrollLine from './ScrollLine';

const milestones = [
    { year: '2019', title: 'Legacy Living Founded', description: 'Our journey began with a vision to redefine modern real estate.' },
    { year: '2020', title: 'Platform Launch', description: 'Launched our web platform, connecting users with premium listings.' },
    { year: '2021', title: 'Reached 10,000 Users', description: 'Surpassed 10k active users with exceptional customer satisfaction.' },
    { year: '2022', title: 'Partnered with Builders', description: 'Teamed up with leading developers to expand our offerings.' },
    { year: '2023', title: 'AI-Powered Recommendations', description: 'Introduced intelligent property matching features.' },
    { year: '2024', title: 'Pan-India Expansion', description: 'Now serving clients in 12 major cities across India.' }
  ];

const LeftIcon=iconMap['leftIcon']

const RightIcon=iconMap['rightIcon']

const HistoryTimeline = () => {
  return (
    <div className='relative overflow-x-hidden mt-10 md:mt-20 mb-10 md:mb-20 px-2 md:px-6'>
        <h1 className='text-[var(--primary-color)] font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-20' data-aos='fade-left'>Our History</h1>

        <ScrollLine/>
        {/* <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[var(--secondary-color)] z-[-1] rounded-4xl" data-aos='move-line'></div> */}
        <div className="flex flex-col gap-4 md:gap-6">
          {milestones.map((item, index)=>(
              <div 
                key={index} 
                className={`relative flex w-full ${index%2===0?'justify-start':'justify-end'} flex-col md:flex-row`}>
                  <div className={`bg-[var(--primary-color)] text-transparent rounded-full w-8 h-8 md:w-10 md:h-10 absolute left-1/2 transform -translate-x-1/2 md:${index%2==0?'left-[50%]':'right-[50%]'} md:left-[50%] hidden md:block`} data-aos='zoom-in'></div>

                  <div className={`flex justify-center items-center bg-teal-600/20 backdrop-blur-md border border-teal-500/20 rounded-xl w-full md:max-w-[450px] md:w-auto md:sm:w-[45%] p-3 md:p-4 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:ml-6':'md:mr-6'}`} data-aos='fade-down'>
                    <Card text1={item.title} text2={item.description} role={item.year} lr='true'/>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}
export default HistoryTimeline

