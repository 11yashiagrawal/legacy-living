import React from 'react'
import Card from './Card'
import { iconMap } from './IconMap';

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
    <div className='relative overflow-x-hidden mt-20 mb-20 px-4'>
        <h1 className='text-[var(--primary-color)] font-bold text-center text-4xl sm:text-5xl md:text-6xl mb-20'>Our History</h1>

        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[var(--secondary-color)] z-[-1] rounded-4xl animate-move-line"></div>
        <div className="flex flex-col gap-4">
          {milestones.map((item, index)=>(
              <div 
                key={index} 
                className={`relative flex w-full ${index%2===0?'justify-start':'justify-end'}`}>
                  {index%2==0?
                    <LeftIcon className='bg-[var(--primary-color)] text-transparent rounded-full w-10 h-10 absolute left-[47%] md:left-[48.60%]'/>
                  :<RightIcon className='bg-[var(--primary-color)] text-transparent rounded-full w-10 h-10 absolute right-[47%] md:left-[48.60%]'/>}

                  <div className={`flex justify-center items-center bg-teal-600/20 backdrop-blur-md border border-teal-500/20 rounded-xl max-w-[450px] w-auto sm:w-[45%] p-4 ${index % 2 === 0 ? 'ml-6':'mr-6'} `}>
                    <Card text1={item.title} text2={item.description} role={item.year} lr='true'/>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}
export default HistoryTimeline

